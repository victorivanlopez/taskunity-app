import { useMemo } from 'react';
import { TaskItem } from './TaskItem';

export const TasksList = ({ tasks }) => {

  const tasksInProgress = useMemo(() => tasks.filter(task => !task.isCompleted), [tasks]);
  const tasksCompleted = useMemo(() => tasks.filter(task => task.isCompleted), [tasks]);

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='space-y-4'>
          <div className='border-b pb-2 flex justify-between'>
            <h5 className='text-xl font-bold'>En proceso</h5>
            <p>{tasksInProgress.length} Tarea(s)</p>
          </div>
          {
            tasksInProgress.map(task => (
              <TaskItem key={task._id} task={task} />
            ))
          }
        </div>
        <div className='space-y-4'>
          <div className='border-b pb-2 flex justify-between'>
            <h5 className='text-xl font-bold'>Completadas</h5>
            <p>{tasksCompleted.length} Tarea(s)</p>
          </div>
          {
            tasksCompleted.map(task => (
              <TaskItem key={task._id} task={task} />
            ))
          }
        </div>
      </div>
    </>
  )
}