import Project from '../models/Project.js';
import Task from '../models/Task.js';

export const createTask = async (req, res) => {
  const { name, description, priority, project } = req.body;

  try {
    const projectAssigned = await Project.findById(project);

    if (projectAssigned.creator.toString() !== req.user._id.toString()) {
      const { message } = new Error('No tienes acceso a este proyecto.');
      return res.status(403).json({ message });
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

export const getTask = async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findById(id).populate('project');
    if (task.project.creator.toString() !== req.user._id.toString()) {
      const { message } = new Error('No se tiene autorización para ver la tarea indicada.');
      return res.status(403).json({ message });
    }
    res.json(task);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      const { message } = new Error('Tarea no encontrada.');
      return res.status(404).json({ message });
    }
  }
}

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { name, description, dueDate, priority } = req.body;

  try {
    const task = await Task.findById(id).populate('project');
    if (!task) {
      const { message } = new Error('Tarea no encontrada.');
      return res.status(404).json({ message });
    }
    if (task.project.creator.toString() !== req.user._id.toString()) {
      const { message } = new Error('No se tiene autorización para editar la tarea indicada.');
      return res.status(403).json({ message });
    }

    const taskUpdated = await Task.findOneAndUpdate(
      task,
      { name, description, dueDate, priority },
      { new: true }
    );

    res.json(taskUpdated);

  } catch (error) {
    const { message } = new Error('Error al actualizar tarea.');
    return res.status(500).json({ message });
  }
}

export const deleteTask = async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findById(id).populate('project');
    if (!task) {
      const { message } = new Error('Tarea no encontrada.');
      return res.status(404).json({ message });
    }
    if (task.project.creator.toString() !== req.user._id.toString()) {
      const { message } = new Error('No se tiene autorización para eliminar la tarea indicada.');
      return res.status(403).json({ message });
    }

    await task.deleteOne();
    res.json({ message: 'Tarea eliminada' });

  } catch (error) {
    const { message } = new Error('Error al eliminar la tarea.');
    return res.status(500).json({ message });
  }
}