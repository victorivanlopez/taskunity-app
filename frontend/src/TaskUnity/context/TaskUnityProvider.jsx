import { useState } from 'react';
import { TaskUnityContext } from './TaskUnityContext';
import {
  createProject,
  createTask,
  deleteProject,
  getProject,
  getProjects,
  updateProject
} from '../helpers';

export const TaskUnityProvider = ({ children }) => {

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState({});
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
      return await updateProject(project, token);
    }
    return await createProject(project, token);
  }

  const startGetProject = async (id) => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (!token) return;

    const project = await getProject(id, token);
    setIsLoading(false);
    setProject(project);
  }

  const startDeleteProject = async (id) => {
    // TODO: Agregar sweetalert2
    if (confirm('¿Desea eliminar este proyecto?')) {
      const token = localStorage.getItem('token');
      if (!token) return;
      return await deleteProject(id, token);
    } else {
      return null;
    }
  }

  const startSaveTask = async (task) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    const response = await createTask(task, token);
    const projectUpdated = { ...project.tasks };
    projectUpdated.tasks = [...project.tasks, response.task];
    setProject(projectUpdated);
    return response;
  }

  const onShowModalTask = () => {
    showAlert({});
    setIsOpenModalTask(!isOpenModalTask);
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
      }}
    >
      {children}
    </TaskUnityContext.Provider>
  )
}