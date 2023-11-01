import { Outlet } from 'react-router-dom';
import { HeaderAdmin, SidebarAdmin } from '../components';

export const AdminLayout = () => {

  return (
    <>
      <HeaderAdmin />

      <SidebarAdmin />

      <main className='p-4 md:ml-64 h-auto md:pt-24'>
        <Outlet />
      </main>
    </>
  )
}