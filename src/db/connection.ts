const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Mongo connected!'))
  .catch((err: any) => console.log(err));
