import { useEffect, useState } from 'react';
import { TaskUnityContext } from './TaskUnityContext';
import { createProject, getProjects } from '../helpers';

export const TaskUnityProvider = ({ children }) => {

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState({});

  const showAlert = (alert) => {
    setAlert(alert);
  }

  const startGetProjects = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    const projects = await getProjects(token);
    setIsLoading(false);
    setProjects(projects);
  }

  const startCreateProject = async (project) => {
    const token = localStorage.getItem('token');
    return await createProject(project, token);
  }

  return (
    <TaskUnityContext.Provider
      value={{
        showAlert,
        alert,
        startCreateProject,
        startGetProjects,
        projects,
        isLoading,
      }}
    >
      {children}
    </TaskUnityContext.Provider>
  )
}