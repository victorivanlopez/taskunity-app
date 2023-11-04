import { Link } from 'react-router-dom';
import { formatDate } from '../helpers';

export const ProjectItem = ({ project }) => {

  const { name, client, _id, deadline, description } = project;

  const date = deadline.split('T')[0];

  return (
    <Link
      to={_id}
      className="flex flex-col justify-between px-6 py-4 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors"
    >
      <h5 className="text-2xl font-bold tracking-tight">{name}</h5>
      <p className="font-bold text-[#423F98]">{client}</p>
      <p className='py-2'>{description}</p>

      <div className='border-t border-gray-200 mt-2 pt-4 text-xs'>
        <p className='font-bold'>Fecha de entrega: <span className='font-normal'>{formatDate(date)}</span></p>
      </div>
    </Link>
  )
}