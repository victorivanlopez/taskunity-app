import { AuthLayout } from '../auth/layout/AuthLayout';
import AuthRoutes from '../auth/routes/AuthRoutes';

const AppRouter = [
  {
    path: '/auth',
    element: <AuthLayout />,
    children: AuthRoutes,
  },
  {
    path: '/',
    element: <h1>TaskUnity Landing</h1>
  }
]

export default AppRouter;