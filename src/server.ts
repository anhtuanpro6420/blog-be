import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './routes';

config();

// eslint-disable-next-line import/first
import './db/connection';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'prod') {
  app.use(helmet());
} else {
  app.use(morgan('dev'));
}

app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('Hello World');
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
