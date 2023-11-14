import { useState } from 'react';
import { TaskUnityContext } from './TaskUnityContext';
import {
  addCollaborator,
  createProject,
  createTask,
  deleteProject,
  deleteTask,
  getProject,
  getProjects,
  searchCollaborator,
  updateProject,
  updateTask
} from '../helpers';

export const TaskUnityProvider = ({ children }) => {

  //TODO: Mejorar obtención de token para no repetir tanto código

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [collaborator, setCollaborator] = useState({});
  const [task, setTask] = useState({});
  const [projectToEdit, setProjectToEdit] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState({});
  const [dataToDelete, setDataToDelete] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');
  const [isOpenModalAlert, setIsOpenModalAlert] = useState(false);

  const showAlert = (alert) => {
    setAlert(alert);
  }

  const startGetProjects = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (!token) return;
    const projects = await getProjects(token);
    setIsLoading(false);
    setProjects(projects);
  }

  const startSaveProject = async (project) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    if (project.id) {
      const response = await updateProject(project, token);
      const projectsUpdated = projects.map(project => (project._id === response._id) ? response : project);
      setProjects(projectsUpdated);
      setIsOpenModal(false);
      return;
    }
    const response = await createProject(project, token);

    if (response.project) {
      setProjects([...projects, response.project]);
      setIsOpenModal(false);
      return;
    }
    return response;
  }

  const startGetProject = async (id) => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (!token) return;

    const response = await getProject(id, token);

    if (response?.error) return

    setIsLoading(false);
    setProject(response);
  }

  const startDeleteProject = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;


    await deleteProject(dataToDelete._id, token);

    const projectsUpdated = projects.filter(project => (project._id !== dataToDelete._id));
    setProjects(projectsUpdated);
    setDataToDelete({});
    setIsOpenModalAlert(false);
  }

  const startSaveTask = async (task) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const projectUpdated = { ...project };

    if (task.id) {
      const response = await updateTask(task, token);
      projectUpdated.tasks = projectUpdated.tasks.map(task => (task._id === response._id) ? response : task);
      setProject(projectUpdated);
      setIsOpenModal(false);
      return response;
    }
    const response = await createTask(task, token);
    projectUpdated.tasks = [...project.tasks, response.task];
    setProject(projectUpdated);
    setIsOpenModal(false);
    return response;
  }

  const startDeleteTask = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const projectUpdated = { ...project };

    await deleteTask(dataToDelete._id, token);
    projectUpdated.tasks = projectUpdated.tasks.filter(task => task._id !== dataToDelete._id);
    setProject(projectUpdated);
    setDataToDelete({});
    setIsOpenModalAlert(false);
  }

  const startSearchCollaborator = async (email) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    setCollaborator({});

    const response = await searchCollaborator(email, token);

    if (response?.error) {
      return showAlert(response);
    }
    showAlert({});
    setCollaborator(response);
  }

  const startAddCollaborator = async (email) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const response = await addCollaborator(email, project._id, token);

    showAlert(response);
    return response;
  }

  const onShowModal = (type = '') => {
    setTypeModal(type);
    setCollaborator({});
    showAlert({});
    setTask({});
    setProjectToEdit({});
    setIsOpenModal(!isOpenModal);
  }

  const onShowModalAlert = (type = '') => {
    setTypeModal(type);
    setIsOpenModalAlert(!isOpenModalAlert);
  }

  const addDataToDelete = (data) => {
    setDataToDelete(data);
  }

  const onModalEditingProject = (project) => {
    setProjectToEdit(project);
    setIsOpenModal(true);
  }

  const onModalEditingTask = (task) => {
    setTask(task);
    setTypeModal('task');
    setIsOpenModal(true);
  }

  return (
    <TaskUnityContext.Provider
      value={{
        addDataToDelete,
        alert,
        collaborator,
        isLoading,
        isOpenModal,
        isOpenModalAlert,
        onModalEditingProject,
        onModalEditingTask,
        onShowModal,
        onShowModalAlert,
        project,
        projects,
        projectToEdit,
        showAlert,
        startDeleteProject,
        startDeleteTask,
        startGetProject,
        startGetProjects,
        startSaveProject,
        startSaveTask,
        startSearchCollaborator,
        startAddCollaborator,
        task,
        typeModal,
      }}
    >
      {children}
    </TaskUnityContext.Provider>
  )
}