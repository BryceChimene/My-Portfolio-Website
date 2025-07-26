import { Link } from 'react-router-dom';
import Project from './Project';

export default function ProjectCarousel({ projects }) {
  return (
    <div className="project-carousel-container">
      {projects.map((project, index) => (
        <Link
          to={`/project/${project.id}`}
          key={index}
          className="carousel-project-link"
          style={{ textDecoration: 'none', color: 'inherit' }} // Optional styling
        >
          <Project
            index={index}
            img={project.img}
            subheading={project.projectType}
            heading={project.title}
          />
        </Link>
      ))}
    </div>
  );
}
