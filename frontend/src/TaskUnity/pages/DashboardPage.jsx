import { useEffect, useMemo } from 'react';
import { useTaskUnityContext } from '../../hooks/useTaskUnityContext';
import { Spinner } from '../components/Spinner';
import { useAuth } from '../../hooks/useAuth';
import { TasksStatsPie } from '../components/TasksStatsPie';

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
            </svg>
            <div>
              <p className='font-bold'>Total de proyectos</p>
              <p className='text-3xl font-bold text-[#423F98]'>{projectsQty}</p>
            </div>
          </div>
          <div className='flex gap-4 items-center p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors text-[#545454]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
              <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
            </svg>
            <div>
              <p className='font-bold'>Proyectos colaborando</p>
              <p className='text-3xl font-bold text-[#423F98]'>{projectsCollaboratorQty}</p>
            </div>
          </div>
          <div className='flex gap-4 items-center p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors text-[#545454]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
            </svg>
            <div>
              <p className='font-bold'>Tareas creadas</p>
              <p className='text-3xl font-bold text-[#423F98]'>{tasksQty}</p>
            </div>
          </div>
        </div>

        <div className='my-10'>
          <h4 className='text-xl font-bold mb-5'>Resumen de las tareas</h4>

          <div className='mt-5 max-w-sm mx-auto'>
            <TasksStatsPie />
          </div>
        </div>
      </div>
    </>
  )
}