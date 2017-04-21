const env = {
  DB: {
    dev: 'mongodb://localhost/dev',
    prod: process.env.MONGO_URI,
  },
  MODE: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
};

export default env;
