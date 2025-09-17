
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "~/components/ProjectCard";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('https://localhost:8000/projects')
  const data= await res.json()
  return {projects:data}
}


const ProjectsPage = ({ loaderData}:Route.ComponentProps) => {
  
  const { projects } = loaderData as { projects: Project[] };
  
  
  
  return (
    <>
      <h1 className='text-2xl uppercase'>projects</h1>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
