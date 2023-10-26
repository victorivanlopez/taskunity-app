import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-bold uppercase">Inicia sesión en tu cuenta para <span className="text-[#423F98]">administrar tus proyectos</span></h1>

      <form className="my-10">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="font-bold"
          >Correo eléctronico</label>
          <input
            required
            id="email"
            type="email"
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="font-bold"
          >Password</label>
          <input
            required
            id="password"
            type="password"
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-10">
          <button
            className="w-full cursor-pointer rounded-md border bg-[#423F98] py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>

        <nav className='flex flex-col gap-5'>
          <p className='flex gap-1 justify-center text-[#4d4d4d]'>
            o
            <Link
              to='/auth/forgot-password'
              className='text-[#423F98] underline font-bold'
            >
              He olvidado la contraseña
            </Link>
          </p>
          <p className='flex gap-1 justify-center text-[#4d4d4d]'>
            ¿No tienes una cuenta?
            <Link
              to='/auth/register'
              className='text-[#423F98] underline font-bold'
            >
              Regístrate
            </Link>
          </p>
        </nav>
      </form>
    </>
  )
}