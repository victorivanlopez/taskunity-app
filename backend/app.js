import express from 'express';
import connectDB from './config/db.js';
import { server } from './config/config.js';
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(express.json());

connectDB();

// Routing 
app.use('/api/users', userRouter);

app.listen(server.PORT, () => {
  console.log(`Example app listening on port ${server.PORT}`)
});