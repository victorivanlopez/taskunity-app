import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { confirmUser } from '../helpers';
import { Alert } from '../../components/Alert';

export const ConfirmAccountPage = () => {

  const { token } = useParams();
  const [alert, setAlert] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  const confirmingUser = async () => {
    const response = await confirmUser(token);
    setAlert(response);
    if (response?.error) {
      return setIsConfirmed(false);
    }
    setIsConfirmed(true);
  }

  useEffect(() => {
    confirmingUser();
  }, [])

  return (
    <>
      <h1 className="text-2xl text-center font-bold uppercase">Confirma tu cuenta para <span className="text-taskunity-800">administrar tus proyectos</span></h1>

      {
        (alert?.message) && <Alert alert={alert} />
      }

      {
        (isConfirmed) && (
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