import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

mongoose.connect(config.mongoUri).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

export default app;