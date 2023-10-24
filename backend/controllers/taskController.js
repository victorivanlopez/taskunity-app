import Project from '../models/Project.js';
import Task from '../models/Task.js';

export const createTask = async (req, res) => {
  const { name, description, priority, project } = req.body;

  try {
    const projectAssigned = await Project.findById(project);

    if (projectAssigned.creator.toString() !== req.user._id.toString()) {
      const { message } = new Error('No tienes acceso a este proyecto.');
      return res.status(401).json({ message });
    }

    const newTask = new Task({ name, description, priority, project });
    const task = await newTask.save();
    return res.status(201).json({ message: 'Tarea creada con éxito.', task });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      const { message } = new Error('El proyecto asignado es incorrecto.');
      return res.status(404).json({ message });
    } else {
      const { message } = new Error('Error al crear el proyecto.');
      return res.status(500).json({ message, error });
    }
  }
}