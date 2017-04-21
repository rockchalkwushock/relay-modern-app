import graphQLHTTP from 'express-graphql';
import morgan from 'morgan';

export default app => {
  app.use(morgan('dev'));
  app.use('/', graphQLHTTP({
    graphiql: true,
    pretty: true,
    // TODO: schema
  }));
};
