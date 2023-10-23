import Project from '../models/Project.js';

export const createProject = async (req, res) => {

  const { name, description, client } = req.body;

  const newProject = new Project({ name, description, client });
  newProject.creator = req.user._id;

  try {
    const project = await newProject.save();
    return res.status(201).json({ message: 'Proyecto creado con éxito.', project });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el proyecto.'});
  }
}