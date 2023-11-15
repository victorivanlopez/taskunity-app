
import { useAuth, useTaskUnityContext } from './';

export const useAdmin = () => {
  const { project } = useTaskUnityContext();
  const { auth } = useAuth();

  const isAdmin = auth.user._id === project.creator;

  return {
    isAdmin
  }
}