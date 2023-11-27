import { useAdmin, useTaskUnityContext } from '../../hooks';
import { DaysRemaining } from './';
import { EditIcon, DeleteIcon, CheckIcon } from './icons';

const prioritiesColors = {
  baja: 'border-green-500',
  media: 'border-yellow-500',
  alta: 'border-red-500',
}

export const TaskItem = ({ task }) => {

  const { _id, name, description, dueDate, priority, isCompleted, completedBy } = task;
  const { onModalEditingTask, onShowModalAlert, addDataToDelete, startToggleTask } = useTaskUnityContext();
  const { isAdmin } = useAdmin();

  const onClickDelete = () => {
    onShowModalAlert('task');
    addDataToDelete(task);
  }


  return (
    <div className={`${isCompleted ? 'border-none' : prioritiesColors[priority]} p-6 border-l-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors`}>

      <div className="flex flex-col justify-center">
        <h5 className="text-xl font-bold tracking-tight w-3/4 line-clamp-2">{name}</h5>
        <p className='my-2'>{isCompleted ? '' : description}</p>

        <div className='border-t border-gray-200 pt-4 text-sm mt-2 flex justify-between text-[#545454]'>
          {
            isCompleted
              ? <p className='font-bold text-green-500'>Completada por: {completedBy?.name}</p>
              : <DaysRemaining date={dueDate} />
          }

          <ul className='flex gap-4 items-center'>
            <li>
              <button
                type='button'
                className={`${isCompleted ? 'text-green-500' : ''} hover:text-green-500 transition-colors`}
                onClick={() => startToggleTask(_id)}
              >
                <CheckIcon />
                <span className="sr-only">Completar tarea</span>
              </button>
            </li>
            {
              (isAdmin && !isCompleted) &&
              <>
                <li>
                  <button
                    type='button'
                    className='hover:text-taskunity-800 transition-colors'
                    onClick={() => onModalEditingTask(task)}
                  >
                    <EditIcon />
                    <span className="sr-only">Editar tarea</span>
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    className='hover:text-red-500 transition-colors'
                    onClick={onClickDelete}
                  >
                    <DeleteIcon />
                    <span className="sr-only">Eliminar tarea</span>
                  </button>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}