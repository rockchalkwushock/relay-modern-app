import express from 'express';
import { database, env, middlewares } from './utils';

const server = express();

middlewares(server);

if (env.MODE !== 'production') {
  database(env.DB.dev);
} else {
  database(env.DB.prod);
}

server.listen(env.PORT, err => {
  if (err) return console.error(err);
  console.log(`Application running on ${env.PORT} in ${env.MODE}`);
});
