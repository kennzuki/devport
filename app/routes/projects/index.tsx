
import type { Route } from "./+types/index";
import type { Projects } from "~/types";

export async function loader({request}: Route.LoaderArgs):Promise < {projects: Projects[]} > {
  const res = await fetch('https://localhost:8000/projects')
  const data= await res.json()
  return {projects:data}
}


const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  
  const { projects } = loaderData as { projects: Projects[] };
  console.log(projects);
  
  return (
    <>
      <h1 className=''>projects</h1>
    </>
  );
};

export default ProjectsPage;
