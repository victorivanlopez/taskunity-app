import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../helpers';
import { useTaskUnityContext } from '../../hooks';

export const ProjectItem = ({ project }) => {

  const { name, client, _id, deadline, description } = project;
  const [isDeleted, setIsDeleted] = useState(false);

  const { startDeleteProject, startGetProjects } = useTaskUnityContext();

  useEffect(() => {
    if (isDeleted) {
      startGetProjects();
    }
  }, [isDeleted])

  const dropdownDots = useRef(null);
  const dropdownDotsContainer = useRef(null);

  const showDropdownDots = () => {
    dropdownDots.current.classList.toggle('hidden');
    dropdownDotsContainer.current.classList.toggle('hidden');
  }

  const onClickButton = async () => {
    await startDeleteProject(_id);
    setIsDeleted(true);
  }

  return (
    <>
      <div
        ref={dropdownDotsContainer}
        className='hidden fixed z-40 top-0 left-0 bottom-0 right-0'
        onClick={showDropdownDots}
      ></div>
      <div className='p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors'>
        <div className='flex justify-end'>
          <button
            type="button"
            className="absolute items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50"
            onClick={showDropdownDots}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

          </button>
          <div ref={dropdownDots} className="absolute hidden z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-36">
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <Link
                  to={`${_id}/edit`}
                  className='block px-4 py-2 hover:bg-gray-100 transition-colors'
                >
                  <span>Editar</span>
                </Link>
              </li>
            </ul>
            <div className="py-2 text-sm">
              <button
                className='block w-full px-4 py-2 text-start text-[#CF0B0B] hover:bg-gray-100 transition-colors'
                onClick={onClickButton}
              >
                <span>Eliminar</span>
              </button>
            </div>
          </div>
        </div>

        <Link
          to={_id}
          className="min-h-full flex flex-col"
        >
          <h5 className="text-2xl font-bold tracking-tight w-3/4 line-clamp-2">{name}</h5>
          <p className="font-bold text-[#423F98] line-clamp-1">{client}</p>
          <p className='my-2 line-clamp-3'>{description}</p>

          <div className='border-t border-gray-200 pt-6 text-xs mt-auto'>
            <p className='font-bold'>Fecha de entrega: <span className='font-normal'>{formatDate(deadline)}</span></p>
          </div>
        </Link>
      </div>
    </>
  )
}