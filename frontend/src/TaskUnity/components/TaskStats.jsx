import { useMemo } from 'react';
import { useTaskUnityContext } from '../../hooks/useTaskUnityContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const TaskStats = () => {

  const { projects } = useTaskUnityContext();

  const taskStats = useMemo(() => {
    let completedTasks = 0;
    let incompleteTasks = 0;

    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.isCompleted) {
          completedTasks++;
        } else {
          incompleteTasks++;
        }
      });
    });

    return [completedTasks, incompleteTasks];
  }, [projects]);

  const data = {
    labels: ['Completadas', 'En proceso'],
    datasets: [
      {
        label: 'Tarea(s)',
        data: taskStats,
        backgroundColor: [
          '#423F98',
          '#B0A6EB',
        ],
      },
    ],
  };
  return (
    <Doughnut data={data} />
  )
}