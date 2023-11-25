import { Link } from 'react-router-dom';
import { DaysRemaining } from './DaysRemaining';
import { useAuth, useTaskUnityContext } from '../../hooks';
import { EditIcon, DeleteIcon } from './icons';

export const ProjectItem = ({ project }) => {

  const { auth } = useAuth();
  const { onShowModalAlert, addDataToDelete, onModalEditingProject } = useTaskUnityContext();

  const { name, client, _id, deadline, description, creator } = project;

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
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}