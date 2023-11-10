import { Dialog } from '@headlessui/react';
import { useTaskUnityContext } from '../../hooks';

export const AlertDeleteTask = () => {

  const { onShowModalAlert } = useTaskUnityContext();

  return (
    <>
      <div className='flex flex-col gap-2'>
        <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
          ¿Eliminar la tarea?
        </Dialog.Title>

        <Dialog.Description>
          Si eliminas la tarea no la podrás recuperar.
        </Dialog.Description>

        <div className='flex justify-end gap-4 mt-4'>
          <button
            type='button'
            className='rounded-lg border border-[#423F98] px-4 py-2 text-base text-[#423F98] font-bold'
            onClick={onShowModalAlert}
          >
            Cancelar
          </button>
          <button
            className='rounded-lg border bg-red-500 px-4 py-2 text-base text-white font-bold'
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  )
}