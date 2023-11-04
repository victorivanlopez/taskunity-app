import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTaskUnityContext } from '../../hooks';
import { FormProject, Spinner } from '../components';

export const ProjectEditPage = () => {

  const { id } = useParams();
  const { startGetProject, project, isLoading } = useTaskUnityContext();

  useEffect(() => {
    startGetProject(id);
  }, [])

  if (isLoading) return <Spinner />

  const initialForm = {
    id: project._id,
    name: project.name,
    description: project.description,
    deadline: project.deadline.split('T')[0],
    client: project.client,
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Editar: {project.name}</h1>

      <div className="my-10">
        <FormProject btnText="Guardar cambios" initialForm={initialForm} />
      </div>
    </>
  )
}