import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTaskUnityContext, useAuth } from '../../hooks/';
import { BarsIcon, ChartIcon, LogoutIcon, ProjectIcon } from './icons';

export const SidebarAdmin = () => {

  const sidebar = useRef();
  const { logoutTaskUnity } = useTaskUnityContext();
  const { logoutAuth } = useAuth();

  const showSidebar = () => {
    sidebar.current.classList.toggle('-translate-x-full');
    document.body.classList.toggle('overflow-y-hidden');
  }

  const hiddenSidebar = () => {
    if (document.body.classList.contains('overflow-y-hidden')) {
      sidebar.current.classList.add('-translate-x-full');
      document.body.classList.remove('overflow-y-hidden');
    }
  }

  const onLogout = () => {
    logoutTaskUnity();
    logoutAuth();
  }

  return (
    <>
      <button
        type="button"
        className="absolute top-4 z-50 p-2 mt-2 ml-3 text-sm text-[#423F98] rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-[#EAF1F7]"
        onClick={showSidebar}
      >
        <BarsIcon styles='w-7 h-7' />
        <span className="sr-only">Mostrar menú</span>

      </button>

      <aside ref={sidebar} className="fixed z-10 top-0 pt-32 md:pt-20 left-0 w-64 h-screen bg-[#EAF1F7] transition-transform duration-500 -translate-x-full md:translate-x-0 shadow" aria-label="Sidebar">
        <div className="h-full px-6 py-6 overflow-y-auto bg-[#EAF1F7]">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                className={({ isActive }) => `${isActive ? 'bg-[#423F98] text-white' : ''} flex items-center gap-2 p-2 rounded-lg hover:bg-[#423F98] text-[#545454] hover:text-white transition-colors w-full`}
                to="/dashboard"
                onClick={hiddenSidebar}
              >
                <ChartIcon />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => `${isActive ? 'bg-[#423F98] text-white' : ''} flex items-center gap-2 p-2 rounded-lg hover:bg-[#423F98] text-[#545454] hover:text-white transition-colors w-full`}
                to="/projects"
                onClick={hiddenSidebar}
              >
                <ProjectIcon />
                <span>Proyectos</span>
              </NavLink>
            </li>
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-400">
            <li>
              <button
                type='button'
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#423F98] text-[#545454] hover:text-white transition-colors w-full"
                onClick={onLogout}
              >
                <LogoutIcon />
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}