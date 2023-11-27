import { useState } from 'react';
import { useTaskUnityContext } from '../../hooks';

export const CollaboratorResult = ({ collaborator }) => {

  const { name, email } = collaborator;

  const [isDisabled, setIsDisabled] = useState(false);
  const { startAddCollaborator } = useTaskUnityContext();

  const onAddCollaborator = async () => {

    const response = await startAddCollaborator(email);

    if (response?.error) {
      return setIsDisabled(true);
    }
  }

  return (
    <div className="flex justify-between items-center border-t py-4">
      <p>{name}</p>
      <button
        type='button'
        className='flex gap-2 w-max rounded-lg border bg-taskunity-800 px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90 mt-4 md:mt-0 disabled:bg-opacity-50'
        disabled={isDisabled}
        onClick={onAddCollaborator}
      >
        <span>Agregar</span>
      </button>
    </div>
  )
}