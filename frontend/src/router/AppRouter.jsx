import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthLayout } from '../auth/layout/AuthLayout';
import { DashboardLayout } from '../TaskUnity/layout/DashboardLayout';
import AuthRoutes from '../auth/routes/AuthRoutes';

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
    path: '/dashboard',
    element: 
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
  },
]

export default AppRouter;