import {
  DashboardPage,
  ProjectsPage,
  ProjectPage,
} from '../pages';

export const DashboardRoutes = [
  {
    index: true,
    element: <DashboardPage />
  },
]

export const ProjectsRoutes = [
  {
    index: true,
    element: <ProjectsPage />
  },
  {
    path: ':id',
    element: <ProjectPage />
  },
]