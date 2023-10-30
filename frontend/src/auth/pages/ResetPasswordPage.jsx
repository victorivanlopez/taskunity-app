import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { verifyToken } from '../helpers';
import { Alert } from '../../components';

export const ResetPasswordPage = () => {

  const { token } = useParams();
  const [alert, setAlert] = useState({});
  const [isTokenValid, setIsTokenValid] = useState(false);

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

  return (
    <>
      <h1 className="text-2xl text-center font-bold uppercase">Restablece tu contraseña para <span className="text-[#423F98]">administrar tus proyectos</span></h1>

      {
        (alert?.message) && <Alert alert={alert} />
      }

      {
        isTokenValid && (
          <form className="my-10">
            <div className="mb-5">
              <label
                htmlFor="password"
                className="font-bold"
              >Nueva contraseña</label>
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
                Restablecer contraseña
              </button>
            </div>
          </form>
        )
      }
    </>
  )
}