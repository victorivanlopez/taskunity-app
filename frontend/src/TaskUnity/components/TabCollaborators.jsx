import { useTaskUnityContext } from '../../hooks';
import { CollaboratorsList } from './CollaboratorsList';
import { PlusIcon } from './icons';

export const TabCollaborators = () => {

  const { onShowModal, project } = useTaskUnityContext();

  return (
    <>
      <button
        type='button'
        className='flex gap-2 w-max rounded-lg border bg-taskunity-800 px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90 mt-4 md:mt-0'
        onClick={() => onShowModal('collaborator')}
      >
        <PlusIcon />
        <span>Nuevo colaborador</span>
      </button>

      <div className="my-10">
        {
          (project?.collaborators?.length > 0)
            ? <CollaboratorsList collaborators={project.collaborators} />
            : <p>No hay colaboradores en este proyecto.</p>
        }
      </div>
    </>
  )
}