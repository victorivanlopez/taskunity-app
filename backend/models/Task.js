import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  dueDate: {
    type: Date,
    default: Date.now(),
  },
  priority: {
    type: String,
    required: true,
    enum: ['baja', 'media', 'alta'],
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  completedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;