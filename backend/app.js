import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import projectRouter from './routes/projectRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import { server, front } from './config/config.js';
import { Server } from 'socket.io';

const app = express();
app.use(express.json());

connectDB();

// CORS
const whitelist = [front.URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

app.use(cors(corsOptions));

// Routing 
app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/tasks', taskRouter);

const httpServer = app.listen(server.PORT, () => {
  console.log(`Example app listening on port ${server.PORT}`)
});

// Socket.io
const io = new Server(httpServer, {
  pingTimeout: 60000,
  cors: {
    origin: front.URL,
  },
});

io.on('connection', (socket) => {
  socket.on('open project', (project) => {
    socket.join(project);
  });

  socket.on('create task', (task) => {
    socket.to(task.project).emit('task created', task);
  });

  socket.on('delete task', (task) => {
    socket.to(task.project).emit('task deleted', task);
  });

  socket.on('update task', (task) => {
    socket.to(task.project).emit('task updated', task);
  });

  socket.on('toggle task', (task) => {
    socket.to(task.project._id).emit('task toggled', task);
  });
});