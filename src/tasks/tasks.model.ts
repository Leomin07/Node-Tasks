import { model, Schema } from 'mongoose';
import { ITask } from './ITask';

const taskSchema = new Schema<ITask>({
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const taskModel = model<ITask>('task', taskSchema);

export default taskModel;
