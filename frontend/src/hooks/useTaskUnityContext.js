import { useContext } from 'react';
import { TaskUnityContext } from '../TaskUnity/context';

export const useTaskUnityContext = () => {
  return useContext(TaskUnityContext);
}