import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTaskUnityContext } from '../../hooks';
import { ModalFormTask, Spinner } from '../components';

export const ProjectPage = () => {

  const { id } = useParams();
  const { startGetProject, project, isLoading, onShowModalTask } = useTaskUnityContext();

  useEffect(() => {
    startGetProject(id);
  }, [])

  if (isLoading) return <Spinner />

  const { name } = project;

  return (
    <>
      <div className='inline-block'>
        <Link
          to='/projects'
          className='text-[#423F98] flex items-center gap-1 mb-4'
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>

          <span>Todos los proyectos</span>
        </Link>
      </div>


      <div className='md:flex md:justify-between items-center'>
        <h1 className='text-4xl font-bold'>{name}</h1>
      </div>

      <div className='my-10 space-y-2'>
        <button
          type='button'
          className='flex gap-2 w-max rounded-lg border bg-[#423F98] px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90 mt-4 md:mt-0'
          onClick={onShowModalTask}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
          </svg>

          <span>Nueva tarea</span>
        </button>
      </div>

      <ModalFormTask />
    </>
  )
}