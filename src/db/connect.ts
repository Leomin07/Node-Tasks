import { connect } from 'mongoose';
import colors from 'colors';
import 'dotenv/config';

const connectDb = async (): Promise<void> => {
  try {
    await connect(
      'mongodb://mongo:yzW69w1moNX0gTahYpn8@containers-us-west-29.railway.app:6904'
    );
    console.log(colors.red('connect successful'));
  } catch (error) {
    console.error(error);
  }
};

export default connectDb;
