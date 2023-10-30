import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { AuthProvider } from './auth/context';

const router = createBrowserRouter(AppRouter);

const TaskUnityApp = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default TaskUnityApp;