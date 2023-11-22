import { useEffect } from 'react';
import { useTaskUnityContext } from '../../hooks/useTaskUnityContext';
import { Spinner } from '../components/Spinner';

export const DashboardPage = () => {

  const { startGetProjects, projects, isLoading } = useTaskUnityContext();

  useEffect(() => {
    startGetProjects();
  }, [])

  if (isLoading) return <Spinner />

  const projectsQty = projects.length;
  // const tasksInProgress = projects.map(project => console.log(project.tasks));
  // const tasksCompleted = projects?.tasks?.filter(task => task.isCompleted);
  console.log(projects)

  return (
    <>
      <h1 className='text-4xl font-bold'>Dashboard</h1>

      <div className='my-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex gap-4 items-center justify-center p-4 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
            </svg>
            <div>
              <h4 className='text-gray-500'>Total de proyectos</h4>
              <p className='text-3xl font-bold text-[#423F98]'>{projectsQty}</p>
            </div>
          </div>
          <div className='flex gap-4 items-center justify-center p-4 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className='text-gray-500'>Tareas pendientes</h4>
              <p className='text-3xl font-bold text-[#423F98]'>1</p>
            </div>
          </div>
          <div className='flex gap-4 items-center justify-center p-4 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>

            <div>
              <h4 className='text-gray-500'>Tareas completadas</h4>
              <p className='text-3xl font-bold text-[#423F98]'>2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}