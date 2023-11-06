import { Link, useParams } from 'react-router-dom';
import { useTaskUnityContext } from '../../hooks';
import { useEffect } from 'react';
import { Spinner } from '../components';
import { Alert } from '../../components';

export const ProjectPage = () => {

  const { id } = useParams();
  const { startGetProject, project, isLoading, alert } = useTaskUnityContext();

  useEffect(() => {
    startGetProject(id);
  }, [])

  if (isLoading) return <Spinner />

  const { name } = project;

  return (
    <>
      <Link
        to='/projects'
        className='text-[#423F98] flex items-center gap-1 mb-4'
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>

        <span>Todos los proyectos</span>
      </Link>


      <div className='md:flex md:justify-between items-center'>
        <h1 className='text-4xl font-bold'>{name}</h1>
      </div>

      {alert?.message && <Alert alert={alert} />}

      <div className='my-10 space-y-2'>
        <h2 className='text-2xl font-bold'>Tareas</h2>
      </div>
    </>
  )
}