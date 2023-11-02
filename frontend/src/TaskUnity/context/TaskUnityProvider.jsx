import { useState } from 'react';
import { TaskUnityContext } from './TaskUnityContext';
import { createProject } from '../helpers';

export const TaskUnityProvider = ({ children }) => {

  const [alert, setAlert] = useState({});
  const token = localStorage.getItem('token');

  const showAlert = (alert) => {
    setAlert(alert);
  }

  const startCreateProject = async (project) => {
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