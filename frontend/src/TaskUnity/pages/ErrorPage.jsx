import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <main className="mx-auto max-w-6xl">
      <div className='flex flex-col justify-center items-center gap-6 mx-4 lg:px-0 py-20 md:py-30'>
        <h1 className="text-center text-5xl font-extrabold mt-20 text-taskunity-800 uppercase">¡Oops! Algo salió mal.</h1>
        <p className="text-center font-bold">{error.data || error.message}</p>

        <Link
          to='/'
          className='flex gap-2 w-max rounded-lg border bg-taskunity-800 px-4 py-2 text-base text-white font-bold transition-colors hover:bg-opacity-90 mt-4 md:mt-0'
        >
          <span>Volver al inicio</span>
        </Link>
      </div>
    </main>
  )
}