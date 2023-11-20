import { Link } from 'react-router-dom';

export const HeaderLanding = () => {
  return (
    <header>
      <nav className="bg-[#EAF1F7] border-[#423F98] border-b">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-0 mx-auto py-4 px-10">
          <Link to={'/'}>
            <img src="/assets/taskunity-logo.png" className="h-10" alt="TaskUnity Logo" />
          </Link>

          <ul className='flex gap-2 m-2 md:m-0'>
            <li>
              <Link
                to='/auth/login'
                className='w-max px-4 py-2 text-base font-bold '
              >
                <span>Iniciar sesión</span>
              </Link>
            </li>
            <li>
              <Link
                to='/auth/register'
                className='w-max rounded-lg border bg-[#423F98] px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90'
              >
                <span>Regístrate</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}