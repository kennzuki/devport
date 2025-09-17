import type { ComponentProps } from "react";
import type { Route } from "./+types/index";

export async function loader({request}: Route.LoaderArgs):Promise<any> {
  const res = await fetch('https://localhost:8000/projects')
  const data= await res.json()
  return {projects:data}
}


const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  
  const { projects } = loaderData
  console.log(projects);
  
  return (
    <>
      <h1 className=''>projects</h1>
    </>
  );
};

export default ProjectsPage;
