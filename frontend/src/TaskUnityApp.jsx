import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { AuthProvider } from './auth/context';
import { TaskUnityProvider } from './TaskUnity/context/TaskUnityProvider';

const router = createBrowserRouter(AppRouter);

const TaskUnityApp = () => {
  return (
    <AuthProvider>
      <TaskUnityProvider>
        <RouterProvider router={router} />
      </TaskUnityProvider>
    </AuthProvider>
  )
}

export default TaskUnityApp;