import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';


export const PrivateRoute = ({ children }) => {

  const { auth, isLoading } = useAuth();

  if (isLoading) return;

  return (auth?.user)
    ? children
    : <Navigate to="/auth/login" />
}