import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { TaskUnityContext } from './TaskUnityContext';
import {
  addCollaborator,
  createProject,
  createTask,
  deleteProject,
  deleteTask,
  getProject,
  getProjects,
  removeCollaborator,
  searchCollaborator,
  toggleTask,
  updateProject,
  updateTask
} from '../helpers';

let socket;

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

  useEffect(() => {
    if(project?._id) {
      socket = io(import.meta.env.VITE_BACKEND_URL);
    }
  }, [project])

  const showAlert = (alert) => {
    setAlert(alert);
  }

  const startGetProjects = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (!token) return;
    const projects = await getProjects(token);
    setAlert({});
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
    if (response?.error) {
      setAlert(response);
      setIsLoading(false);
      return;
    }
    setAlert({});
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

    if (task.id) {
      const response = await updateTask(task, token);

      socket.emit('update task', response);
      setIsOpenModal(false);
      return response;
    }
    const response = await createTask(task, token);
    setIsOpenModal(false);
    socket.emit('create task', response);
    return response;
  }

  const startDeleteTask = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    await deleteTask(dataToDelete._id, token);

    socket.emit('delete task', dataToDelete);
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

    if (response?.error) {
      showAlert(response);
      return response;
    }
    showAlert({});
    const projectUpdated = { ...project };

    projectUpdated.collaborators = [...projectUpdated.collaborators, collaborator];

    setProject(projectUpdated);
    setIsOpenModal(false);
    return response;
  }

  const startDeleteCollaborator = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const response = await removeCollaborator(dataToDelete._id, project._id, token);

    if (response?.error) {
      return showAlert(response);
    }
    showAlert({});
    const projectUpdated = { ...project };

    projectUpdated.collaborators = projectUpdated.collaborators.filter(collaborator => collaborator._id !== dataToDelete._id);
    setProject(projectUpdated);

    setDataToDelete({});
    setIsOpenModalAlert(false);
  }

  const startToggleTask = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const response = await toggleTask(id, token);

    if (response?.error) {
      return showAlert(response);
    }

    showAlert({});
    socket.emit('toggle task', response);
    setTask({});
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
    setDataToDelete({});
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

  const addTaskToState = (newTask) => {
    const projectUpdated = { ...project };
    projectUpdated.tasks = [...projectUpdated.tasks, newTask];
    setProject(projectUpdated);
  }

  const updateTaskToState = (taskUpdated) => {
    const projectUpdated = { ...project };
    projectUpdated.tasks = projectUpdated.tasks.map(task => (task._id === taskUpdated._id) ? taskUpdated : task);
    setProject(projectUpdated);
  }

  const deteleTaskToState = (task) => {
    const projectUpdated = { ...project };
    projectUpdated.tasks = projectUpdated.tasks.filter(taskState => taskState._id !== task._id);
    setProject(projectUpdated);
  }

  const toggleTaskToState = (task) => {
    const projectUpdated = { ...project };
    projectUpdated.tasks = projectUpdated.tasks.map(taskState => (taskState._id === task._id) ? task : taskState);
    setProject(projectUpdated);
  }

  const logoutTaskUnity = () => {
    setProjects([]);
    setProject({});
    setAlert({});
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
        startDeleteCollaborator,
        startToggleTask,
        task,
        typeModal,
        addTaskToState,
        deteleTaskToState,
        updateTaskToState,
        toggleTaskToState,
        logoutTaskUnity,
      }}
    >
      {children}
    </TaskUnityContext.Provider>
  )
}