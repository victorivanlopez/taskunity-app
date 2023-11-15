import { Dialog } from '@headlessui/react';
import { useTaskUnityContext } from '../../hooks';


export const AlertDeleteCollaborator = () => {

  const { onShowModalAlert, startDeleteCollaborator, typeModal } = useTaskUnityContext();

  return (
    <>
      <div className='flex flex-col gap-2'>
        <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
          ¿Eliminar colaborador?
        </Dialog.Title>

        <Dialog.Description>
          Si lo eliminas no podrá acceder al proyecto.
        </Dialog.Description>

        <div className='flex justify-end gap-4 mt-4'>
          <button
            type='button'
            className='rounded-lg border border-[#423F98] px-4 py-2 text-base text-[#423F98] font-bold'
            onClick={() => onShowModalAlert(typeModal)}
          >
            Cancelar
          </button>
          <button
            className='rounded-lg border bg-red-500 px-4 py-2 text-base text-white font-bold'
            onClick={startDeleteCollaborator}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  )
}
