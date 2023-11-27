import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthLayout } from '../auth/layout/AuthLayout';
import { AdminLayout } from '../TaskUnity/layout/AdminLayout';
import AuthRoutes from '../auth/routes/AuthRoutes';
import { DashboardRoutes, ProjectsRoutes } from '../TaskUnity/routes/TaskUnityRoutes';
import { ErrorPage, LandingPage } from '../TaskUnity/pages';

const AppRouter = [
  {
    path: '/',
    element:
      <PublicRoute>
        <LandingPage />
      </PublicRoute>,
    errorElement: <ErrorPage />
  },

  {
    path: '/auth',
    element:
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>,
    children: AuthRoutes,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element:
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>,
    children: DashboardRoutes
  },
  {
    path: '/projects',
    element:
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>,
    children: ProjectsRoutes
  },
]

export default AppRouter;