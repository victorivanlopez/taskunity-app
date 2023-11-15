import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTaskUnityContext } from '../../hooks';
import {
  Spinner,
  TabsProject,
  AlertDeleteTask,
  Modal,
  ModalAlert,
  FormTask,
  FormCollaborator,
  AlertDeleteCollaborator
} from '../components';
import { Alert } from '../../components';

export const ProjectPage = () => {

  const { id } = useParams();
  const { startGetProject, project, isLoading, typeModal, alert } = useTaskUnityContext();

  useEffect(() => {
    startGetProject(id);
  }, [])

  if (isLoading) return <Spinner />

  if (alert?.error) return <Alert alert={alert} />

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

      <h1 className='text-4xl font-bold'>{name}</h1>

      <TabsProject />


      <Modal>
        {
          typeModal === 'task'
            ? <FormTask /> :
            typeModal === 'collaborator'
              ? <FormCollaborator /> : null
        }
      </Modal>

      <ModalAlert>
        {
          typeModal === 'task'
            ? <AlertDeleteTask /> :
            typeModal === 'collaborator'
              ? <AlertDeleteCollaborator /> : null
        }
      </ModalAlert>
    </>
  )
}