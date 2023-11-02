import { useState } from 'react';
import { TaskUnityContext } from './TaskUnityContext';
import { createProject } from '../helpers';

export const TaskUnityProvider = ({ children }) => {

  const [alert, setAlert] = useState({});

  const showAlert = (alert) => {
    setAlert(alert);
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
      }}
    >
      {children}
    </TaskUnityContext.Provider>
  )
}