import { useState } from 'react';
import type { Route } from './+types/index';
import type { Project } from '~/types';
import ProjectCard from '~/components/ProjectCard';

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

  const renderPagination = () => (
    <div className='flex justify-center gap-2 mt-2'>
      {Array.from({ length: totalPages }, (_, indx) => (
        <button
          key={indx + 1}
          className={`px-3 py-1 cursor-pointer rounded ${currentPage === indx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700  text-gray-200'}`}
          onClick={() => setCurrentPage(indx + 1)}
        >
          {indx + 1}
        </button>
      ))}
    </div>
  );
  return (
    <>
      <h1 className='text-2xl uppercase font-bold '>projects</h1>
      <div className='grid grid-cols-3 gap-4 sm:grid-cols-2 mb-6'>
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {totalPages> 1 && renderPagination()}
    </>
  );
};

export default ProjectsPage;
