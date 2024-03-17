import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
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
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
