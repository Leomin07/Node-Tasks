import express, { Request, Response } from 'express';
import colors from 'colors';
import morgan from 'morgan';
import 'dotenv/config';
import router from './routes/routes';
import connectDb from './db/connect';
import bodyParser from 'body-parser';

connectDb();

const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.listen(port, () => {
  console.log(colors.blue(`App listening on port ${port}`));
});
