import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <main className='container mx-auto py-10 md:py-30'>
      <div className='w-full px-4 md:px-0'>
        <div className='mx-auto max-w-xl overflow-hidden rounded-lg bg-white py-12 px-4 md:px-12 shadow'>
          <div className="mb-12 mx-auto max-w-[250px]">
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