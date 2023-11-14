import { Dialog } from '@headlessui/react';
import { Alert } from '../../components';
import { useForm, useTaskUnityContext } from '../../hooks';
import { CollaboratorItem } from './CollaboratorItem';

export const FormCollaborator = () => {

  const { email, onInputChange } = useForm({ email: '' });

  const { startSearchCollaborator, showAlert, alert, collaborator } = useTaskUnityContext();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (email === '') {
      return showAlert({
        message: 'El campo email es obligatorio.',
        error: true
      });
    }
    showAlert({});
    await startSearchCollaborator(email);
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
            className="w-full cursor-pointer rounded-md border bg-[#423F98] py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
            type="submit"
          >
            Buscar colaborador
          </button>
        </div>
      </form>

      <div>
        {
          collaborator?._id && <CollaboratorItem collaborator={collaborator} />
        }
      </div>
    </>
  )
}