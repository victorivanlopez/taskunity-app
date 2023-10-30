import { useContext } from 'react';
import { AuthContext } from '../auth/context';

export const useAuth = () => {
  return useContext(AuthContext);
}
