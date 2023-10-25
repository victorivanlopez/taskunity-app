import Project from '../models/Project.js';
import Task from '../models/Task.js';

export const getProjects = async (req, res) => {
  const projects = await Project.find().where('creator').equals(req.user._id);

  res.json(projects);
}

export const createProject = async (req, res) => {

  const { name, description, client } = req.body;

  const newProject = new Project({ name, description, client });
  newProject.creator = req.user._id;

  try {
    const project = await newProject.save();
    return res.status(201).json({ message: 'Proyecto creado con éxito.', project });
  } catch (error) {
    const { message } = new Error('Error al crear el proyecto.');
    return res.status(500).json({ message });
  }
}

export const getProject = async (req, res) => {
  const id = req.params.id;

  try {
    const project = await Project.findById(id);
    if (project.creator.toString() !== req.user._id.toString()) {
      const { message } = new Error('No tienes acceso a este proyecto.');
      return res.status(401).json({ message });
    }

    const tasks = await Task.find().where('project').equals(project._id);
    res.json({
      project,
      tasks
    });

  } catch (error) {
    const { message } = new Error('Proyecto no encontrado.');
    return res.status(404).json({ message });
  }
}

export const updateProject = async (req, res) => {
  const id = req.params.id;

  try {
    const project = await Project.findById(id);
    if (project.creator.toString() !== req.user._id.toString()) {
      const { message } = new Error('No tienes acceso a este proyecto.');
      return res.status(401).json({ message });
    }

    const projectUpdated = await Project.findOneAndUpdate(project, req.body, { new: true });
    res.json(projectUpdated);

  } catch (error) {
    const { message } = new Error('Proyecto no encontrado o hubo un error al actualizar.');
    return res.status(404).json({ message });
  }
}

export const deleteProject = async (req, res) => {
  const id = req.params.id;

  try {
    const project = await Project.findById(id);
    if (project.creator.toString() !== req.user._id.toString()) {
      const { message } = new Error('No tienes acceso a este proyecto.');
      return res.status(401).json({ message });
    }

    await project.deleteOne();
    res.json({ message: 'Proyecto eliminado' });

  } catch (error) {
    const { message } = new Error('Proyecto no encontrado o hubo un error al eliminar.');
    return res.status(404).json({ message });
  }
}