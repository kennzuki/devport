import type { Project } from '~/types';
import type { Route } from './+types/index';
import Featured from '~/components/Featured';
import AboutPreview from '~/components/AboutPreview';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'devport | welcome' },
    { name: 'description', content: 'Welcome to devport!' },
  ];
}

export async function loader({request}:Route.LoaderArgs):Promise<{projects:Project[]}>  {
  const res=await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data=await res.json();
  return {projects:data}
}

const HomePage=({loaderData}:Route.ComponentProps)=> {
  const{projects}=loaderData
  
  return (
    <section className=''>
      <Featured projects={projects} count={2} />
      <AboutPreview/>
    </section>
  );
}

export default HomePage