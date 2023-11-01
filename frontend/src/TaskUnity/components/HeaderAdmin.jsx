import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const HeaderAdmin = () => {

  const { auth } = useAuth();

  return (
    <header className="relative top-0 z-10">
      <nav className="bg-[#EAF1F7] border-[#423F98] border-b">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-0 mx-auto py-4 px-10">
          <Link to={'/dashboard'}>
            <img src="/assets/taskunity-logo.png" className="h-10" alt="TaskUnity Logo" />
          </Link>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Icono buscar</span>
            </div>
            <input type="text" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:border-[#B0A6EB]" placeholder="Buscar..." />
          </div>

          <p className="hidden md:block">Bienvenido, <span className="font-bold">{auth.user.name}</span></p>
        </div>
      </nav>
    </header>
  )
}