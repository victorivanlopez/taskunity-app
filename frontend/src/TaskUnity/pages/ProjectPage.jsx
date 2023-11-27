import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { useAdmin, useTaskUnityContext } from '../../hooks';
import {
  Spinner,
  TabsProject,
  AlertDeleteTask,
  Modal,
  ModalAlert,
  FormTask,
  FormCollaborator,
  AlertDeleteCollaborator,
  TabsProjectCollaborator
} from '../components';
import { Alert } from '../../components';
import { ArrowLeftIcon } from '../components/icons';

let socket;

export const ProjectPage = () => {

  const { id } = useParams();
  const {
    startGetProject,
    project,
    isLoading,
    typeModal,
    alert,
    addTaskToState,
    deteleTaskToState,
    updateTaskToState,
    toggleTaskToState,
  } = useTaskUnityContext();
  const { isAdmin } = useAdmin();

  useEffect(() => {
    startGetProject(id);
  }, [id])

  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit('open project', id);
  }, [])

  useEffect(() => {
    socket.on('task created', (newTask) => {
      if (newTask.project === project._id) {
        addTaskToState(newTask);
      }
    });

    socket.on('task deleted', (task) => {
      if (task.project === project._id) {
        deteleTaskToState(task);
      }
    });

    socket.on('task updated', (taskUpdated) => {
      if (taskUpdated.project === project._id) {
        updateTaskToState(taskUpdated);
      }
    });
    socket.on('task toggled', (task) => {
      if (task.project._id === project._id) {
        toggleTaskToState(task);
      }
    });
  })


  if (isLoading) return <Spinner />

  if (alert?.error && !isAdmin) return <Alert alert={alert} />

  const { name } = project;

  return (
    <>
      <div className='inline-block'>
        <Link
          to='/projects'
          className='text-taskunity-800 flex items-center gap-1 mb-4'
        >
          <ArrowLeftIcon />
          <span>Todos los proyectos</span>
        </Link>
      </div>

      <h1 className='text-4xl font-bold'>{name}</h1>

      {
        isAdmin
          ? <TabsProject />
          : <TabsProjectCollaborator />
      }


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