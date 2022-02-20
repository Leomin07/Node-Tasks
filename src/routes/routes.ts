import { Router } from 'express';
import {
  deleteTaskById,
  updateTaskById,
} from '../controllers/tasks.controller';
import {
  addTask,
  getAllTask,
  getTaskById,
} from '../controllers/tasks.controller';

const router = Router();

router.route('/tasks').post(addTask).get(getAllTask);

router
  .route('/tasks/:id')
  .get(getTaskById)
  .delete(deleteTaskById)
  .put(updateTaskById);

export default router;
