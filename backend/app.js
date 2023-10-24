import express from 'express';
import connectDB from './config/db.js';
import { server } from './config/config.js';
import userRouter from './routes/userRoutes.js';
import projectRouter from './routes/projectRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
app.use(express.json());

connectDB();

// Routing 
app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/tasks', taskRouter);

app.listen(server.PORT, () => {
  console.log(`Example app listening on port ${server.PORT}`)
});