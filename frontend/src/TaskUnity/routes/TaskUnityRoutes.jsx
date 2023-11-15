import { 
  DashboardPage, 
  ProjectsPage, 
  ProjectPage,
} from '../pages';

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
    path: ':id',
    element: <ProjectPage />
  },
]