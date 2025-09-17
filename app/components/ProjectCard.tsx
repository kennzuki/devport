import { Link } from "react-router";
import type { Projects } from "~/types";


const ProjectCard = ({ project }: { project: Projects }) => {
    return ( 
        <Link className="block" to={`/projects/${project.id}`}>
        <div key={project.id} className="bg-gray-800 p-4 shadow-md rounded-xl overflow-hidden transition hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="">{project.category}</span>
              <span className="">{new Date(project.date).toLocaleDateString()}</span>
            </div>
           
          </div>
        </Link>
     );
}
 
export default ProjectCard;