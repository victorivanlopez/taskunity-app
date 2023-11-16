import { Link } from 'react-router-dom';
import { DaysRemaining } from './DaysRemaining';
import { useAuth, useTaskUnityContext } from '../../hooks';

export const ProjectItem = ({ project }) => {

  const { auth } = useAuth();
  const { onShowModalAlert, addDataToDelete, onModalEditingProject } = useTaskUnityContext();

  const { name, client, _id, deadline, description, creator } = project;

  console.log({ creator, auth })


  const onClickDelete = () => {
    onShowModalAlert();
    addDataToDelete(project);
  }

  return (
    <>
      <div className='relative p-8 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors'>
        <div className='absolute top-4 right-4'>
          {
            (auth.user._id !== creator) &&
            <p className='text-xs font-bold p-1 bg-[#EAF1F7] text-[#423F98] rounded'>Colaborador</p>
          }
        </div>
        <div className='flex flex-col justify-center min-h-full'>
          <Link
            to={_id}
            className="flex flex-col gap-1"
          >
            <h5 className="text-xl font-bold tracking-tight w-3/4 line-clamp-2">{name}</h5>
            <p className="font-bold text-[#423F98] line-clamp-1">{client}</p>
            <p className='my-2 line-clamp-3'>{description}</p>
          </Link>

          <div className='border-t border-gray-200 pt-6 text-xs text-[#545454] mt-auto'>
            <div className='flex justify-between'>
              <DaysRemaining date={deadline} />

              {
                (auth.user._id === creator) &&
                <ul className='flex gap-4 items-center'>
                  <li>
                    <button
                      type='button'
                      className='hover:text-[#423F98] transition-colors'
                      onClick={() => onModalEditingProject(project)}
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
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}