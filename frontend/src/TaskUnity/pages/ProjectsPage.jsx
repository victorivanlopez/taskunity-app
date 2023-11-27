import { useEffect } from 'react';
import { useTaskUnityContext } from '../../hooks';
import { AlertDeleteProject, FormProject, Modal, ModalAlert, ProjectsList, Spinner } from '../components';
import { PlusIcon } from '../components/icons';

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
          className='flex gap-2 w-max rounded-lg border bg-taskunity-800 px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90 mt-4 md:mt-0'
          onClick={onShowModal}
        >
          <PlusIcon />
          <span>Nuevo Proyecto</span>
        </button>
      </div>

      <div className='my-10'>
        {
          (projects.length > 0)
            ? <ProjectsList projects={projects} />
            : <p>No hay proyectos aquí aún.</p>
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