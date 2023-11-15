import { useAdmin, useTaskUnityContext } from '../../hooks';
import { DaysRemaining } from './';

const prioritiesColors = {
  baja: 'border-green-500',
  media: 'border-yellow-500',
  alta: 'border-red-500',
}

export const TaskItem = ({ task }) => {

  const { _id, name, description, dueDate, priority, isCompleted } = task;
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
              ? <p className='font-bold text-green-500'>Completada</p>
              : <DaysRemaining date={dueDate} />
          }

          <ul className='flex gap-4 items-center'>
            <li>
              <button
                type='button'
                className={`${isCompleted ? 'text-green-500' : ''} hover:text-green-500 transition-colors`}
                onClick={() => startToggleTask(_id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Completar tarea</span>
              </button>
            </li>
            {
              (isAdmin) &&
              <>
                <li>
                  <button
                    type='button'
                    className='hover:text-[#423F98] transition-colors'
                    onClick={() => onModalEditingTask(task)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                    <span className="sr-only">Editar tarea</span>
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    className='hover:text-red-500 transition-colors'
                    onClick={onClickDelete}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
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