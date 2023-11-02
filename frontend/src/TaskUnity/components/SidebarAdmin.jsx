import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

export const SidebarAdmin = () => {

  const sidebar = useRef();
  const dropdown = useRef();

  return (
    <>
      <button
        type="button"
        className="absolute top-4 z-50 p-2 mt-2 ml-3 text-sm text-[#423F98] rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-[#EAF1F7]"
        onClick={() => sidebar.current.classList.toggle('-translate-x-full')}
      >
        <span className="sr-only">Mostrar sidebar</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>

      </button>

      <aside ref={sidebar} className="fixed top-0 pt-32 md:pt-16 left-0 w-64 h-screen bg-[#EAF1F7] transition-transform duration-500 -translate-x-full md:translate-x-0 shadow" aria-label="Sidebar">
        <div className="h-full px-6 py-6 overflow-y-auto bg-[#EAF1F7]">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                className={({ isActive }) => `${isActive ? 'bg-[#423F98] text-white' : ''} flex items-center gap-2 p-2 rounded-lg hover:bg-[#423F98] text-[#545454] hover:text-white transition-colors w-full`}
                to="/dashboard"
                onClick={() => sidebar.current.classList.toggle('-translate-x-full')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                </svg>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#423F98] text-[#545454] hover:text-white transition-colors w-full"
                onClick={() => dropdown.current.classList.toggle('hidden')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                </svg>
                <span className="flex-1 text-left whitespace-nowrap">Proyectos</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <ul ref={dropdown} className="hidden py-2 space-y-2">
                <li>
                  <NavLink
                    className={({ isActive }) => `${isActive ? 'bg-[#423F98] text-white' : ''} flex items-center w-full p-2 text-[#545454] hover:text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#423F98]`}
                    to="/projects"
                    end
                    onClick={() => sidebar.current.classList.toggle('-translate-x-full')}
                  >
                    Todos los proyectos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => `${isActive ? 'bg-[#423F98] text-white' : ''} flex items-center w-full p-2 text-[#545454] hover:text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#423F98]`}
                    to="/projects/new"
                    onClick={() => sidebar.current.classList.toggle('-translate-x-full')}
                  >
                    Nuevo proyecto
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-400">
            <li>
              <button
                type='button'
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#423F98] text-[#545454] hover:text-white transition-colors w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}