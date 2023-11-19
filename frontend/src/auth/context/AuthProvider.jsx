import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getProfileUser } from '../helpers';

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem('token');

  const checkingAuth = async () => {

    if (!token) {
      return setIsLoading(false);
    };

    setIsLoading(true);
    const user = await getProfileUser(token);
    setAuth(user);
    setIsLoading(false);
  }

  useEffect(() => {
    checkingAuth();
  }, [token])


  const login = (user = {}) => {
    setAuth(user);
    localStorage.setItem('token', user.token);
  }

  const logoutAuth = () => {
    setAuth({});
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        auth,
        isLoading,
        logoutAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}