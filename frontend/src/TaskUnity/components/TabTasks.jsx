import { useAdmin, useTaskUnityContext } from '../../hooks';
import { TasksList } from './TasksList';
import { Spinner } from './Spinner';
import { PlusIcon } from './icons';

export const TabTasks = () => {

  const { project, isLoading, onShowModal } = useTaskUnityContext();
  const { isAdmin } = useAdmin();

  if (isLoading) return <Spinner />

  return (
    <>
      {
        (isAdmin) &&
        <button
          type='button'
          className='flex gap-2 w-max rounded-lg border bg-taskunity-800 px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90 mt-4 md:mt-0'
          onClick={() => onShowModal('task')}
        >
          <PlusIcon />
          <span>Nueva tarea</span>
        </button>
      }

      <div className="my-10">
        {
          (project?.tasks?.length > 0)
            ? <TasksList tasks={project.tasks} />
            : <p>No hay tareas aún en este proyecto.</p>
        }
      </div>
    </>
  )
}