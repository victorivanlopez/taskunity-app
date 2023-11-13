import { useState } from 'react';
import { TaskUnityContext } from './TaskUnityContext';
import {
  createProject,
  createTask,
  deleteProject,
  deleteTask,
  getProject,
  getProjects,
  updateProject,
  updateTask
} from '../helpers';

export const TaskUnityProvider = ({ children }) => {

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [task, setTask] = useState({});
  const [projectToEdit, setProjectToEdit] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState({});
  const [dataToDelete, setDataToDelete] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalAlert, setIsOpenModalAlert] = useState(false);
  const [isOpenModalTask, setIsOpenModalTask] = useState(false);

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

    const project = await getProject(id, token);
    setIsLoading(false);
    setProject(project);
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

  const onShowModalTask = () => {
    showAlert({});
    setTask({});
    setIsOpenModalTask(!isOpenModalTask);
  }

  const onShowModal = () => {
    showAlert({});
    setTask({});
    setProjectToEdit({});
    setIsOpenModal(!isOpenModal);
  }

  const onShowModalAlert = () => {
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
    setIsOpenModal(true);
  }

  return (
    <TaskUnityContext.Provider
      value={{
        showAlert,
        alert,
        startSaveProject,
        startGetProjects,
        projects,
        isLoading,
        startGetProject,
        project,
        startDeleteProject,
        startSaveTask,
        isOpenModalTask,
        onShowModalTask,
        onShowModal,
        isOpenModal,
        onShowModalAlert,
        isOpenModalAlert,
        onModalEditingProject,
        projectToEdit,
        onModalEditingTask,
        addDataToDelete,
        task,
        startDeleteTask
      }}
    >
      {children}
    </TaskUnityContext.Provider>
  )
}