import type { Project, PostMeta } from '~/types';
import type { Route } from './+types/index';
import Featured from '~/components/Featured';
import AboutPreview from '~/components/AboutPreview';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'devport | welcome' },
    { name: 'description', content: 'Welcome to devport!' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[];posts: PostMeta[] }> {
  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL('/post-meta', request.url)),
  ]);

  if (projectRes.ok || postRes.ok) {
    throw new Error('Failed to find the data');
  }

  const [projects, posts] = await Promise.all([
    projectRes.json(),
    postRes.json(),
  ]);
console.log(projects,posts);

  return {projects,posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects,posts } = loaderData;

  return (
    <section className=''>
      <Featured projects={projects} count={2} />
      <AboutPreview />
    </section>
  );
};

export default HomePage;
