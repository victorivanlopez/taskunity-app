import { Outlet } from 'react-router-dom';
import { HeaderAdmin, SidebarAdmin } from '../components';

export const AdminLayout = () => {

  return (
    <>
      <HeaderAdmin />

      <SidebarAdmin />

      <main className='p-4 sm:ml-64'>
        <Outlet />
      </main>
    </>
  )
}