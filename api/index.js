import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js';
import 'dotenv/config';

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use('api/user', userRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
