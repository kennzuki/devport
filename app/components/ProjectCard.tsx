import { Link } from "react-router";
import type { Project} from "~/types";


const ProjectCard = ({ project }: { project: Project }) => {
    return ( 
        <Link className="block" to={`/projects/${project.documentId}`}>
        <div key={project.id} className="bg-gray-800 p-4 shadow-md rounded-xl overflow-hidden transition hover:scale-105 mt-6">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-blue-400 font-bold uppercase">{project.title}</h2>
            <p>{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="">{project.category}</span>
              <span className="text-sm">{new Date(project.date).toLocaleDateString()}</span>
            </div>
           
          </div>
        </Link>
     );
}
 
export default ProjectCard;