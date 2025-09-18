import type { Project } from "~/types";
import ProjectCard from "./ProjectCard";
type FeaturedPageProps = {
    projects: Project[];
    count: number;
}


const Featured: React.FC<FeaturedPageProps> = ({ projects, count }) => {

    const featured=projects.filter((p) => p.featured).slice(0,count);
    return (
        <section>
        <h1 className="text-xl font-bold">Featured Projects</h1>
        <div className="grid gap-4 sm: md:grid-cols-2">
            {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
        </section>
    );
};

export default Featured;
