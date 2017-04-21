import express from 'express';
import { env } from './utils';

const app = express();

app.listen(env.PORT, err => {
  if (err) return console.error(err);
  console.log(`Application running on ${env.PORT} in ${env.MODE}`);
});
