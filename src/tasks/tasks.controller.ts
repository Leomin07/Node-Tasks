import { RequestHandler } from 'express';
import taskModel from './tasks.model';

export const addTask: RequestHandler = (req, res) => {
  const task = new taskModel(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send({ message: 'Success', Data: task });
    })
    .catch(err => {
      res.send(err);
    });
};

export const getAllTask: RequestHandler = async (req, res) => {
  try {
    const allTask = await taskModel.find({});
    res.status(200).send({ message: 'Success', Data: allTask });
  } catch (error) {
    res.send(error);
  }
};

export const getTaskById: RequestHandler = async (req, res) => {
  try {
    const _id = await taskModel.find({ _id: req.params.id });
    res.send({ message: 'Success', Data: _id });
  } catch (error) {
    res.send(error);
  }
};

export const deleteTaskById: RequestHandler = async (req, res) => {
  try {
    await taskModel.findOneAndDelete({ _id: req.params.id });
    res.send({ message: 'Success' });
  } catch (error) {
    res.send(error);
  }
};

export const updateTaskById: RequestHandler = async (req, res) => {
  try {
    const task = await taskModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.send({ message: 'Success', Data: task });
  } catch (error) {
    res.send(error);
  }
};
