import { useEffect, useMemo } from 'react';
import { useTaskUnityContext, useAuth } from '../../hooks';
import { ProjectStatsByMonth, TaskStats, Spinner } from '../components';
import { CollaboratorsIcon, ProjectIcon, TaskIcon } from '../components/icons';

export const DashboardPage = () => {

  const { startGetProjects, projects, isLoading } = useTaskUnityContext();
  const { auth } = useAuth();

  const projectsQty = useMemo(() => projects.length, [projects]);
  const tasksQty = useMemo(() => projects.reduce((total, project) => total + project.tasks.length, 0), [projects]);
  const projectsCollaboratorQty = useMemo(() => projects.reduce((count, project) => {
    return count + ((project.creator !== auth.user._id) ? 1 : 0);
  }, 0), [projects]);

  useEffect(() => {
    startGetProjects();
  }, [])

  if (isLoading) return <Spinner />

  return (
    <>
      <h1 className='text-4xl font-bold'>Dashboard</h1>

      <div className='my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex gap-4 items-center p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors text-[#545454]'>
            <ProjectIcon size='8' />
            <div>
              <p className='font-bold'>Total de proyectos</p>
              <p className='text-3xl font-bold text-[#423F98]'>{projectsQty}</p>
            </div>
          </div>
          <div className='flex gap-4 items-center p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors text-[#545454]'>
            <CollaboratorsIcon size='8' />
            <div>
              <p className='font-bold'>Proyectos colaborando</p>
              <p className='text-3xl font-bold text-[#423F98]'>{projectsCollaboratorQty}</p>
            </div>
          </div>
          <div className='flex gap-4 items-center p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors text-[#545454]'>
            <TaskIcon size='8' />
            <div>
              <p className='font-bold'>Tareas creadas</p>
              <p className='text-3xl font-bold text-[#423F98]'>{tasksQty}</p>
            </div>
          </div>
        </div>

        <div className='my-10 grid grid-cols-1 lg:grid-cols-6 gap-6'>

          <div className='lg:col-span-4 p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors'>
            <h4 className='text-2xl font-bold mb-5'>Resumen de proyectos</h4>

            <ProjectStatsByMonth />
          </div>
          <div className='lg:col-span-2 p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors'>
            <h4 className='text-2xl font-bold mb-5'>Resumen de tareas</h4>

            <TaskStats />
          </div>
        </div>
      </div>
    </>
  )
}