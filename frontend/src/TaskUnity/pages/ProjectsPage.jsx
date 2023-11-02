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
      <h1 className='text-4xl font-black'>Proyectos</h1>

      <div className='mx-auto max-w-6xl my-14'>
        {
          (projects.length > 0)
            ? <ProjectsList projects={projects} />
            : <p>No hay proyectos.</p>
        }
      </div>

    </>


  )
}