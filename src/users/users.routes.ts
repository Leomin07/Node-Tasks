import { Router } from 'express';
import { loginController, registerController } from './user.controller';
const authRouter = Router();

authRouter.post('/register', registerController);

authRouter.post('/login', loginController);

export default authRouter;
