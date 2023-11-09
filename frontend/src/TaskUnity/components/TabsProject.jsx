import { Tab } from '@headlessui/react';
import { TabTasks } from './TabTasks';

export const TabsProject = () => {

  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <div className='container py-10'>
      <Tab.Group>
        <Tab.List className='flex my-5'>
          <Tab className={({ selected }) =>
            classNames(
              'flex w-full justify-center gap-2 py-2.5 font-medium transition-colors duration-300 mx-1 focus:outline-none',
              selected
                ? 'border-b-2 border-[#423F98] text-[#423F98]'
                : 'hover:text-[#423F98] border-b-2 hover:border-[#423F98]'
            )
          }
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
            </svg>

            <span>Tareas</span>
          </Tab>
          <Tab className={({ selected }) =>
            classNames(
              'flex w-full justify-center gap-2 py-2.5 font-medium transition-colors duration-300 mx-1 focus:outline-none',
              selected
                ? 'border-b-2 border-[#423F98] text-[#423F98]'
                : 'hover:text-[#423F98] border-b-2 hover:border-[#423F98]'
            )
          }
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            <span>Colaboradores</span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <TabTasks />
          </Tab.Panel>
          <Tab.Panel>Sin colaboradores</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
