import { Router } from 'express';
import { deleteTaskById, updateTaskById } from './tasks.controller';
import { addTask, getAllTask, getTaskById } from './tasks.controller';

const taskRouter = Router();

taskRouter.route('/tasks').post(addTask).get(getAllTask);

taskRouter
  .route('/tasks/:id')
  .get(getTaskById)
  .delete(deleteTaskById)
  .put(updateTaskById);

export default taskRouter;
