import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { resetPassword, verifyToken } from '../helpers';
import { Alert } from '../../components';
import { useForm } from '../../hooks';

const initialForm = {
  password: '',
}

export const ResetPasswordPage = () => {

  const { token } = useParams();
  const { password, onInputChange, onResetForm } = useForm(initialForm);
  const [alert, setAlert] = useState({});
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [changedPassword, setChangedPassword] = useState(false);


  const verifyingToken = async () => {
    const response = await verifyToken(token);

    if (response?.error) {
      setAlert(response);
      setIsTokenValid(false);
      return;
    }
    setIsTokenValid(true);
  }

  useEffect(() => {
    verifyingToken();
  }, [])

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (password === '') {
      return setAlert({
        message: 'La contraseña es obligatoria',
        error: true
      });
    }

    if (password.length < 6) {
      return setAlert({
        message: 'La contraseña debe tener al menos 6 caracteres',
        error: true
      });
    }
    setAlert({});

    const response = await resetPassword(token, password);
    setAlert(response);
    setChangedPassword(false);

    if (!response?.error) {
      onResetForm();
      setChangedPassword(true);
    }
  }

  return (
    <>
      <h1 className="text-2xl text-center font-bold uppercase">Restablece tu contraseña para <span className="text-taskunity-800">administrar tus proyectos</span></h1>

      {
        (alert?.message) && <Alert alert={alert} />
      }

      {
        (isTokenValid && !changedPassword) && (
          <form
            className="my-10"
            onSubmit={onSubmitForm}
          >
            <div className="mb-5">
              <label
                htmlFor="password"
                className="font-bold"
              >Nueva contraseña</label>
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
                Restablecer contraseña
              </button>
            </div>
          </form>
        )
      }

      {
        changedPassword && (
          <div className='mt-5 flex flex-col justify-center items-center'>
            <Link
              to='/auth/login'
              className='text-taskunity-800 underline font-bold'
            >
              Inicia Sesión
            </Link>
          </div>
        )
      }
    </>
  )
}