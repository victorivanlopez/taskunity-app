import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { SearchProject } from './SearchProject';

export const HeaderAdmin = () => {

  const { auth } = useAuth();

  return (
    <header className="md:fixed relative left-0 right-0 top-0 z-20">
      <nav className="bg-taskunity-50 border-taskunity-400 border-b">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-0 mx-auto py-4 px-10">
          <Link to={'/dashboard'}>
            <img src="/assets/taskunity-logo.png" className="h-10" alt="TaskUnity Logo" />
          </Link>

          <SearchProject />

          <p className="hidden md:block">Bienvenido, <span className="font-bold">{auth?.user?.name}</span></p>
        </div>
      </nav>
    </header>
  )
}