import { useState } from 'react';
import type { Route } from './+types/index';
import type { Project, StrapiProject, StrapiResponse } from '~/types';
import ProjectCard from '~/components/ProjectCard';
import Pagination from '~/components/Pagination';
import { AnimatePresence, motion } from 'framer-motion';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'devport | projects' },
    { name: 'description', content: 'My website projects' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`);
  const json:StrapiResponse<StrapiProject> = await res.json();
  const projects = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));
  console.log(projects);
  
  
  return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const { projects } = loaderData as { projects: Project[] };
  const projectsPerPage = 4;

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter project based on the category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastPage = currentPage * projectsPerPage;
  const indexOfFirstPage = indexOfLastPage - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  return (
    <>
      <h1 className='text-2xl uppercase font-bold '>projects</h1>
      <div className='flex flex-wrap gap-2 my-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode='wait'>
         <motion.div layout className='grid grid-cols-3 gap-4 sm:grid-cols-2 mb-6'>
          {currentProjects.map((project) => (
            <motion.div layout key={project.id}>
          <ProjectCard project={project} />
          </motion.div>
         
        ))}
      </motion.div>
      </AnimatePresence>

     
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
