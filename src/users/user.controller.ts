import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { userModel } from './user.model';

export const registerController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    //create new user
    const newUser = await new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hashed,
    });

    const user = await newUser.save();

    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const findUser = await userModel.find({ username });
    if (!findUser) {
      res.status(404).json('Wrong username!');
    }
    const validPassword = await bcrypt.compare(password, findUser.password);
    if (!validPassword) {
      res.status(404).send('Wrong password');
    }
    if (findUser && validPassword) res.status(200).send(findUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
