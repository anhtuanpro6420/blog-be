import { config } from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';

config();

// eslint-disable-next-line import/first
import './db/connection';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'prod') {
  app.use(helmet());
} else {
  app.use(morgan('dev'));
}

app.use('/api/v1', routes);
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const error = { ...err };
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  const { message } = error || {};
  console.error(error);
  res.status(error.statusCode).send({
    status: 'error',
    message,
  });
});

// 404 error handler
app.use((req, res) => {
  res.status(404).send({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
