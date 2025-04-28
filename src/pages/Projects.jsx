import { PROJECTS } from '../utils/constants';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

const Projects = () => (
  <div className="min-h-screen py-20 px-4 md:px-20 bg-gradient-to-b from-black to-gray-900">
    <SectionHeader title="Projects" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          link={project.link}
        />
      ))}
    </div>
  </div>
);

export default Projects;