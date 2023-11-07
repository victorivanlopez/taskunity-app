import { Link } from 'react-router-dom';
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
      <div className='inline-block'>
        <Link
          to={-1}
          className='text-[#423F98] flex items-center gap-1 mb-4'
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>

          <span>Regresar</span>
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center">Nuevo proyecto</h1>

      <div className="my-10">
        <FormProject btnText="Crear proyecto" initialForm={initialForm} />
      </div>
    </>
  )
}