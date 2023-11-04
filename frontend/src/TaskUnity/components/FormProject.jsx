import { useNavigate } from 'react-router-dom';
import { useForm, useTaskUnityContext } from '../../hooks';
import { Alert } from '../../components';


export const FormProject = ({ btnText = '', initialForm = {} }) => {

  const {
    name,
    description,
    deadline,
    client,
    onInputChange,
    formState,
    onResetForm
  } = useForm(initialForm);

  const { showAlert, alert, startSaveProject } = useTaskUnityContext();

  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if ([name, description, deadline, client].includes('')) {
      return showAlert({
        message: 'Todos los campos son obligatorios.',
        error: true
      });
    }
    showAlert({});

    const response = await startSaveProject(formState);
    if (response?.error) {
      return showAlert(response);
    }
    onResetForm();
    navigate('/projects');
  }
  return (
    <div className="mx-auto max-w-xl overflow-hidden rounded-lg bg-white py-12 px-4 md:px-12 shadow">

      {alert?.message && <Alert alert={alert} />}

      <form
        onSubmit={onSubmitForm}
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="font-bold"
          >Nombre del proyecto</label>
          <input
            required
            id="name"
            type="text"
            name='name'
            value={name}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="font-bold"
          >Descripción</label>
          <textarea
            required
            id="description"
            name='description'
            value={description}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="deadline"
            className="font-bold"
          >Fecha de entrega</label>
          <input
            required
            id="deadline"
            type="date"
            name='deadline'
            value={deadline}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="client"
            className="font-bold"
          >Nombre del cliente</label>
          <input
            required
            id="client"
            type="text"
            name='client'
            value={client}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div>
          <button
            className="w-full cursor-pointer rounded-md border bg-[#423F98] py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
            type="submit"
          >
            {btnText}
          </button>
        </div>
      </form>
    </div>
  )
}