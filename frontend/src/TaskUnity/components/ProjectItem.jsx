import { Link } from 'react-router-dom';

export const ProjectItem = ({ project }) => {

  const { name, client, _id } = project;

  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-6 py-4 font-bold text-black uppercase whitespace-nowrap">
        {name}
      </th>
      <td className="px-6 py-4">
        {client}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link
          to={_id}
          className="text-base text-[#545454] font-bold underline hover:text-[#423F98] transition-colors hover:bg-opacity-90"
        >
          Ver proyecto
        </Link>
      </td>
    </tr>


  )
}