import bodyParser from 'body-parser';
import colors from 'colors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import connectDb from './db/connect';
import router from './routes/routes';

connectDb();

const port = process.env.PORT || 8000;
const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.listen(port, () => {
  console.log(colors.blue(`App listening on port ${port}`));
});
