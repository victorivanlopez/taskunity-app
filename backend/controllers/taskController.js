import Project from '../models/Project.js';
import Task from '../models/Task.js';

export const createTask = async (req, res) => {
  const { project } = req.body;

  try {
    const projectAssigned = await Project.findById(project);

    if (projectAssigned.creator.toString() !== req.user._id.toString()) {
      const { message } = new Error('No tienes acceso a este proyecto.');
      return res.status(403).json({ message });
    }

    const newTask = new Task(req.body);

    const task = await newTask.save();

    projectAssigned.tasks.push(task._id);
    await projectAssigned.save();
    return res.json(task);
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
    const project = await Project.findById(task.project);
    project.tasks.pull(task._id);

    await Promise.allSettled([await project.save(), await task.deleteOne()]);
    res.json({ message: 'Tarea eliminada' });

  } catch (error) {
    const { message } = new Error('Error al eliminar la tarea.');
    return res.status(500).json({ message });
  }
}

export const toggleTask = async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findById(id).populate('project');
    if (!task) {
      const { message } = new Error('Tarea no encontrada.');
      return res.status(404).json({ message });
    }

    if (task.project.creator.toString() !== req.user._id.toString() && !task.project.collaborators.some((collaborator => collaborator._id.toString() === req.user._id.toString()))) {
      const { message } = new Error('No se tiene autorización para esta acción.');
      return res.status(403).json({ message });
    }

    task.isCompleted = !task.isCompleted;
    task.completedBy = req.user._id;
    
    await task.save();

    const taskSaved = await Task.findById(id)
      .populate('project')
      .populate('completedBy');

    res.json(taskSaved);

  } catch (error) {
    const { message } = new Error('Ha ocurrido un error.');
    return res.status(500).json({ message });
  }
}