import { ProjectItem } from './ProjectItem';

export const ProjectsList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        projects.map(project => (
          <ProjectItem key={project._id} project={project} />
        ))
      }
    </div>
  )
}