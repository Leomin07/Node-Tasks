import bodyParser from 'body-parser';
import colors from 'colors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import connectDb from './db/connect';
import cors from 'cors';
import taskRouter from './tasks/task.routes';
import authRouter from './users/users.routes';

connectDb();

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// router
app.use(taskRouter);
app.use(authRouter);

app.listen(port, () => {
  console.log(colors.blue(`App listening on port ${port}`));
});
