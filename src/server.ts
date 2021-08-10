import { config } from 'dotenv';
import express from 'express';

config();

// eslint-disable-next-line import/first
import './db/connection';

const app = express();

app.get('/', (req, res) => {
  res.send(
    `Hello World from node (CI/CD) finished, test, mongouri -> ${process.env.MONGODB_URI}|`
  );
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
