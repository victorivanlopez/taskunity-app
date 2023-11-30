import {
  DashboardPage,
  ProjectsPage,
  ProjectPage,
  LandingPage,
  PrivacyPage,
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

export const LandingRoutes = [
  {
    index: true,
    element: <LandingPage />
  },
  {
    path: 'privacy',
    element: <PrivacyPage />
  },
]