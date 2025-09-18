import { useState } from 'react';
import type { Route } from './+types/index';
import type { Project } from '~/types';
import ProjectCard from '~/components/ProjectCard';
import Pagination from '~/components/Pagination';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('http://localhost:8000/projects');
  const data = await res.json();
  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as {projects:Project[]};

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastPage = currentPage * projectsPerPage;
  const indexOfFirstPage = indexOfLastPage - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstPage, indexOfLastPage);

 
  return (
    <>
      <h1 className='text-2xl uppercase font-bold '>projects</h1>
      <div className='grid grid-cols-3 gap-4 sm:grid-cols-2 mb-6'>
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
     <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  );
};

export default ProjectsPage;
