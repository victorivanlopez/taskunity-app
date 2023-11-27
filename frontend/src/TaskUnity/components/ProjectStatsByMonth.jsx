import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTaskUnityContext } from '../../hooks';
import { getMonthName } from '../helpers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
);

export const ProjectStatsByMonth = () => {

  const { projects } = useTaskUnityContext();

  const projectsByMonthYear = projects.reduce((acc, project) => {
    const createdAt = new Date(project.createdAt);
    const year = createdAt.getFullYear();
    const month = createdAt.getMonth() + 1;

    const key = `${getMonthName(month)} ${year}`;

    if (acc[key]) {
      acc[key]++;
    } else {
      acc[key] = 1;
    }

    return acc;
  }, {});

  const data = {
    labels: Object.keys(projectsByMonthYear).map(key => key),
    datasets: [
      {
        label: 'Proyectos por mes',
        backgroundColor: '#383877',
        data: Object.values(projectsByMonthYear),
      },
    ],
  };

  return (
    <Bar data={data} />
  )
}