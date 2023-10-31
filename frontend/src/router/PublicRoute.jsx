import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export const PublicRoute = ({ children }) => {

  const { auth, isLoading } = useAuth();

  if (isLoading) return;

  return (auth?.user)
    ? <Navigate to="/projects" />
    : children
}