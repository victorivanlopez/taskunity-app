import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { Alert } from '../../components/Alert';

const initialForm = {
  name: '',
  email: '',
  password: '',
  password2: '',
}

export const RegisterPage = () => {

  const { name, email, password, password2, onInputChange } = useForm(initialForm);
  const [alert, setAlert] = useState({});

  const onSubmitForm = (e) => {
    e.preventDefault();

    if ([name, email, password, password2].includes('')) {
      return setAlert({
        message: 'Todos los campos son obligatorios',
        type: true
      });
    }

    if (password !== password2) {
      return setAlert({
        message: 'Las contraseñas no coinciden',
        type: true
      });
    }

    if (password.length < 6) {
      return setAlert({
        message: 'La contraseña debe tener al menos 6 caracteres',
        type: true
      });
    }
    setAlert({});
    console.log('Creando cuenta...')
  }

  return (
    <>
      <h1 className="text-2xl text-center font-bold uppercase">Regístrate y comienza a <span className="text-[#423F98]">administrar tus proyectos</span></h1>

      {alert?.message && <Alert alert={alert} />}

      <form
        className="my-10"
        onSubmit={onSubmitForm}
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="font-bold"
          >Nombre completo</label>
          <input
            required
            id="name"
            name='name'
            type="text"
            value={name}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>
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
            name='password'
            value={password}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password2"
            className="font-bold"
          >Repetir password</label>
          <input
            required
            id="password2"
            name='password2'
            type="password"
            value={password2}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-10">
          <button
            className="w-full cursor-pointer rounded-md border bg-[#423F98] py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
            type="submit"
          >
            Regístrate
          </button>
        </div>

        <nav className='flex flex-col gap-5'>
          <p className='flex gap-1 justify-center text-[#4d4d4d]'>
            ¿Ya tienes una cuenta?
            <Link
              to='/auth/login'
              className='text-[#423F98] underline font-bold'
            >
              Inicia Sesión
            </Link>
          </p>
        </nav>
      </form>
    </>
  )
}