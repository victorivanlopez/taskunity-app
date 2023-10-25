import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';

const router = createBrowserRouter(AppRouter);

const TaskUnityApp = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default TaskUnityApp;