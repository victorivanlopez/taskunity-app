import { useEffect } from 'react';
import { useTaskUnityContext } from '../../hooks';
import { ProjectsList, Spinner } from '../components';

export const ProjectsPage = () => {

  const { startGetProjects, projects, isLoading } = useTaskUnityContext();

  useEffect(() => {
    startGetProjects();
  }, [])

  if (isLoading) return <Spinner />

  return (
    <>
      <h1 className='text-4xl font-bold'>Proyectos</h1>

      <div className='my-10'>
        {
          (projects.length > 0)
            ? <ProjectsList projects={projects} />
            : <p>No hay proyectos.</p>
        }
      </div>
    </>
  )
}