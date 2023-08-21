import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import tasksRouter from './routes/tasksRoute';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/tasks', tasksRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});