import { 
  DashboardPage, 
  ProjectsPage, 
  ProjectNewPage, 
  ProjectPage, 
  ProjectEditPage 
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
    path: 'new',
    element: <ProjectNewPage />
  },
  {
    path: ':id',
    element: <ProjectPage />
  },
  {
    path: ':id/edit',
    element: <ProjectEditPage />
  },
]