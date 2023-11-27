import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <main className="max-w-6xl mx-auto min-h-full">
      <div className="max-w-full mx-4 lg:px-0 py-20 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 md:gap-10">
          <div className='lg:col-span-2'>
            <h1 className="text-5xl font-black">Simplifica y organiza tus proyectos, conoce TaskUnity</h1>
            <p className='text-lg my-6'> Organiza tareas, colabora en tiempo real y alcanza tus metas más rápido que nunca.</p>
            <Link
              to='/auth/register'
              className='block w-max rounded-lg border bg-taskunity-800 px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90'
            >
              <span>Listo para empezar</span>
            </Link>
          </div>

          <div className='lg:col-span-3'>
            <img src="/assets/desktop-taskunity.png" alt="desktop interface taskunity" />
          </div>
        </div>
      </div>
    </main>
  )
}