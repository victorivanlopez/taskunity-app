import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { useForm, useTaskUnityContext } from '../../hooks';
import { Alert } from '../../components';
import { getCurrentDate } from '../helpers';

const initialForm = {
  name: '',
  description: '',
  dueDate: '',
  priority: '',
}

export const FormTask = () => {
  const {
    id,
    name,
    description,
    dueDate,
    priority,
    onInputChange, formState, onResetForm, updateDataForm } = useForm(initialForm);
  const { startSaveTask, showAlert, alert, project, onShowModalTask, task } = useTaskUnityContext();

  const { id: projectId } = useParams();

  const deadlineProject = project?.deadline?.split('T')[0];

  useEffect(() => {
    if (task?._id) {
      updateDataForm({
        id: task._id,
        name: task.name,
        description: task.description,
        dueDate: task.dueDate?.split('T')[0],
        priority: task.priority
      });
    }
  }, [])

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if ([name, description, dueDate, priority].includes('')) {
      return showAlert({
        message: 'Todos los campos son obligatorios.',
        error: true
      });
    }
    if (dueDate <= getCurrentDate()) {
      return showAlert({
        message: `La fecha debe ser mayor a ${getCurrentDate()}.`,
        error: true
      });
    }
    showAlert({});
    await startSaveTask({ ...formState, project: projectId });
    onResetForm();
  }

  return (
    <>
      <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
        {id ? `Editando: ${name}` : 'Crea una nueva tarea'}
      </Dialog.Title>

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
            min={getCurrentDate()}
            max={deadlineProject}
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
            {id ? 'Guardar cambios' : 'Crea tarea'}
          </button>
        </div>
      </form>
    </>
  )
}