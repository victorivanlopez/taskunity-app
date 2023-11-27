import { Navigate } from 'react-router-dom';
import {
  ConfirmAccountPage,
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage
} from '../pages';

const AuthRoutes = [
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'register',
    element: <RegisterPage />
  },
  {
    path: 'forgot-password',
    element: <ForgotPasswordPage />
  },
  {
    path: 'reset-password/:token',
    element: <ResetPasswordPage />
  },
  {
    path: 'confirm-account/:token',
    element: <ConfirmAccountPage />
  },
  {
    index: true,
    element: <Navigate to='/auth/login' />
  },
]

export default AuthRoutes;