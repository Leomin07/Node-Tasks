import { model, Schema, Types } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
  organization: Types.ObjectId;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: 'organization',
    },
  },
  { timestamps: true }
);

export const userModel = model<IUser>('users', userSchema);
