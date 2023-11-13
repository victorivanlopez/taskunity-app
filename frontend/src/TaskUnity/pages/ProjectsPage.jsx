import { useEffect } from 'react';
import { useTaskUnityContext } from '../../hooks';
import { AlertDeleteProject, FormProject, Modal, ModalAlert, ProjectsList, Spinner } from '../components';

export const ProjectsPage = () => {

  const { startGetProjects, projects, onShowModal, isLoading } = useTaskUnityContext();

  useEffect(() => {
    startGetProjects();
  }, [])

  if (isLoading) return <Spinner />

  return (
    <>
      <div className='md:flex md:justify-between'>
        <h1 className='text-4xl font-bold'>Proyectos</h1>
        <button
          type='button'
          className='flex gap-2 w-max rounded-lg border bg-[#423F98] px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90 mt-4 md:mt-0'
          onClick={onShowModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
          </svg>

          <span>Nuevo Proyecto</span>
        </button>
      </div>

      <div className='my-10'>
        {
          (projects.length > 0)
            ? <ProjectsList projects={projects} />
            : <p>No hay proyectos.</p>
        }
      </div>

      <Modal>
        <FormProject />
      </Modal>

      <ModalAlert>
        <AlertDeleteProject />
      </ModalAlert>
    </>
  )
}