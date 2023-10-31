import { AuthLayout } from '../auth/layout/AuthLayout';
import { PrivateRoute } from './PrivateRoute';
import AuthRoutes from '../auth/routes/AuthRoutes';
import { PublicRoute } from './PublicRoute';

const AppRouter = [
  {
    path: '/',
    element: <h1>TaskUnity Landing</h1>
  },
  {
    path: '/auth',
    element: 
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>,
    children: AuthRoutes,
  },
  {
    path: '/projects',
    element: 
      <PrivateRoute>
        <h1>Proyectos</h1>
      </PrivateRoute>
  },
]

export default AppRouter;