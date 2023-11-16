import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Combobox, Transition } from '@headlessui/react';
import { useTaskUnityContext } from '../../hooks';

export const SearchProject = () => {

  const [query, setQuery] = useState('');

  const { projects } = useTaskUnityContext();

  //TODO: tener en localstorage los proyectos

  const navigate = useNavigate();

  const filteredProjects =
    query === ''
      ? []
      : projects.filter((project) =>
        project.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      );
  return (
    <div className="w-64 md:w-80">
      <Combobox onChange={(project) => navigate(`/projects/${project._id}`)}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 sm:text-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Icono buscar</span>
            </div>
            <Combobox.Input
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:border-[#B0A6EB]"
              placeholder='Buscar proyecto'
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredProjects.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  No se encontró ningún proyecto.
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <Combobox.Option
                    key={project._id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-[#423F98] text-white' : 'text-gray-900'
                      }`
                    }
                    value={project}
                  >
                    {project.name}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}