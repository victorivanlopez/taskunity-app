import { calculateDaysRemaining } from '../helpers';
import { CalendarIcon } from './icons';

export const DaysRemaining = ({ date }) => {
  return (
    <div className='flex gap-2 items-center'>
      <CalendarIcon size='5' />
      <span className="sr-only">Icono de calendario</span>
      {
        calculateDaysRemaining(date) < 0
          ? <p className='font-bold text-red-500'>Ha finalizado.</p>
          : <p className='font-bold'>{`Finaliza en ${calculateDaysRemaining(date)} día(s)`}</p>
      }
    </div>
  )
}