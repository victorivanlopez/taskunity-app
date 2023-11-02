import { DashboardPage, ProjectsPage, ProjectNewPage, ProjectPage } from '../pages';

//TODO: agregar pagina 404

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
    path: 'new',
    element: <ProjectNewPage />
  },
  {
    path: ':id',
    element: <ProjectPage />
  },
]