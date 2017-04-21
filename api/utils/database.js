import mongoose from 'mongoose';

export default conf => {
  mongoose.Promise = global.Promise;
  mongoose.connect(conf);
  mongoose.connection
    .once('open', () => console.log(`Connected to MongoDB: ${conf}`))
    .on('error', err => console.warn('Warning', err));
  mongoose.set('debug', true);
};
