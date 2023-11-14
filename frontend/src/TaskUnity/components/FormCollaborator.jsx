import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Alert } from '../../components';
import { useForm, useTaskUnityContext } from '../../hooks';
import { CollaboratorResult } from './CollaboratorResult';
import { Spinner } from './Spinner';

export const FormCollaborator = () => {

  const { email, onInputChange } = useForm({ email: '' });

  const { startSearchCollaborator, showAlert, alert, collaborator } = useTaskUnityContext();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (email === '') {
      return showAlert({
        message: 'El campo email es obligatorio.',
        error: true
      });
    }
    showAlert({});
    setIsLoading(true);
    await startSearchCollaborator(email);
    setIsLoading(false);
  }

  return (
    <>
      <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
        Nuevo colaborador
      </Dialog.Title>

      {alert?.message && <Alert alert={alert} />}

      <form
        className='py-10'
        onSubmit={onSubmitForm}
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="font-bold"
          >Email</label>
          <input
            required
            id="email"
            type="email"
            name='email'
            value={email}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md border bg-[#423F98] py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90 disabled:bg-opacity-50"
            disabled={isLoading}
          >
            Buscar colaborador
          </button>
        </div>
      </form>

      {isLoading && <Spinner />}

      <div>
        {
          collaborator?._id && <CollaboratorResult collaborator={collaborator} />
        }
      </div>
    </>
  )
}