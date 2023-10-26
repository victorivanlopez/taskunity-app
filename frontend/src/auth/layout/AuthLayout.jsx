import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <main className='container mx-auto py-20 md:py-40'>
      <div className='w-full px-4 md:px-0'>
        <div className='mx-auto max-w-xl overflow-hidden rounded-lg bg-white py-16 px-10 sm:px-12 md:px-16 shadow'>
          <div className="mb-16 mx-auto max-w-[250px]">
            <img
              src="/assets/taskunity-logo.png"
              alt="Logo TaskUnity"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  )
}