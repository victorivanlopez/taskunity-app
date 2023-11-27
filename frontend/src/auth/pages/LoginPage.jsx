import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useForm } from '../../hooks';
import { Alert } from '../../components';
import { authUser } from '../helpers';

const initialForm = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { login, auth } = useAuth();
  const { email, password, onInputChange } = useForm(initialForm);
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if ([email, password].includes('')) {
      return setAlert({
        message: 'Todos los campos son obligatorios.',
        error: true
      });
    }
    setAlert({});

    const response = await authUser({ email, password });

    if (response?.error) {
      return setAlert(response);
    }
    setAlert({});
    login(response);
    navigate('/dashboard', { replace: true });
  }

  return (
    <>
      <h1 className="text-2xl text-center font-bold uppercase">Inicia sesión en tu cuenta para <span className="text-taskunity-800">administrar tus proyectos</span></h1>

      {alert?.message && <Alert alert={alert} />}

      <form
        className="my-10"
        onSubmit={onSubmitForm}
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="font-bold"
          >Correo eléctronico</label>
          <input
            required
            id="email"
            type="email"
            name='email'
            value={email}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-taskunity-400 focus-visible:shadow-none py-3 px-5"
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
            name='password'
            value={password}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-taskunity-400 focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-10">
          <button
            className="w-full cursor-pointer rounded-md border bg-taskunity-800 py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
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
              className='text-taskunity-800 underline font-bold'
            >
              He olvidado la contraseña
            </Link>
          </p>
          <p className='flex gap-1 justify-center text-[#4d4d4d]'>
            ¿No tienes una cuenta?
            <Link
              to='/auth/register'
              className='text-taskunity-800 underline font-bold'
            >
              Regístrate
            </Link>
          </p>
        </nav>
      </form>
    </>
  )
}