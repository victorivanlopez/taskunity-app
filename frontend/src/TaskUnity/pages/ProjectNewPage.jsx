import { FormProject } from '../components';

const initialForm = {
  name: '',
  description: '',
  deadline: '',
  client: '',
}

export const ProjectNewPage = () => {


  return (
    <>
      <h1 className="text-4xl font-bold text-center">Crea un nuevo proyecto</h1>

      <div className="my-10">
        <FormProject btnText="Crear proyecto" initialForm={initialForm} />
      </div>
    </>
  )
}