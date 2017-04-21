import express from 'express';
import { env, middlewares } from './utils';

const server = express();

middlewares(server);

server.listen(env.PORT, err => {
  if (err) return console.error(err);
  console.log(`Application running on ${env.PORT} in ${env.MODE}`);
});
