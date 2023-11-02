import { ProjectItem } from './ProjectItem';

//TODO: Añadir fecha de entrega

export const ProjectsList = ({ projects }) => {
  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-white uppercase bg-[#423F98]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3">

            </th>
          </tr>
        </thead>
        <tbody>
          {
            projects.map(project => (
              <ProjectItem key={project._id} project={project} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}