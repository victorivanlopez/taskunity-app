import { Outlet } from 'react-router-dom';
import { HeaderAdmin, SidebarAdmin } from '../components';

export const AdminLayout = () => {

  return (
    <>
      <HeaderAdmin />

      <SidebarAdmin />

      <main className='p-4 md:ml-64 h-auto md:pt-32'>
        <div className='mx-auto max-w-5xl'>
          <Outlet />
        </div>
      </main>
    </>
  )
}