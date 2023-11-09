import { useParams } from 'react-router-dom';
import { useForm, useTaskUnityContext } from '../../hooks';
import { Alert } from '../../components';

const initialForm = {
  name: '',
  description: '',
  dueDate: '',
  priority: '',
}

export const FormTask = () => {

  const { name, description, dueDate, priority, onInputChange, formState, onResetForm } = useForm(initialForm);
  const { startSaveTask, showAlert, alert, project, onShowModalTask } = useTaskUnityContext();

  const { id } = useParams();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if ([name, description, dueDate, priority].includes('')) {
      return showAlert({
        message: 'Todos los campos son obligatorios.',
        error: true
      });
    }
    showAlert({});
    await startSaveTask({ ...formState, project: id });
    onResetForm();
    onShowModalTask();
  }

  return (
    <>
      {alert?.message && <Alert alert={alert} />}

      <form
        className="py-10"
        onSubmit={onSubmitForm}
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="font-bold"
          >Nombre de la tarea</label>
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
            htmlFor="dueDate"
            className="font-bold"
          >Fecha de entrega</label>
          <input
            required
            id="dueDate"
            type="date"
            name='dueDate'
            min={new Date().toISOString().split('T')[0]}
            max={project?.deadline.split('T')[0]}
            value={dueDate}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="priority"
            className="font-bold"
          >Prioridad</label>
          <select
            required
            id="priority"
            name='priority'
            value={priority}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          >
            <option value="">-- Seleccionar --</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <div>
          <button
            className="w-full cursor-pointer rounded-md border bg-[#423F98] py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
            type="submit"
          >
            Crear tarea
          </button>
        </div>
      </form>
    </>
  )
}