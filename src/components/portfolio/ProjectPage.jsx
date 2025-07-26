import portfolioProjects from '../../assets/utils/portfolioUtils';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function ProjectPage() {
  const { id } = useParams();
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-page-container">
      <div className="project-page">

        <Link to="/" className="back-button">
          ← Back to Portfolio
        </Link>

        <h2 className="title">{project.title}</h2>
        <p className="type">{project.projectType}</p>

        <img src={project.img} alt={project.title} />

        <ul className='project-list'>
          {project.link.length > 0 &&
            project.link.map((item, index) => (
              <li key={`link-${index}`}>
                <a className="project-link" href={item.src} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {item.text}
                </a>
              </li>
            ))}
          {project.tech.map((feat, index) => (
            <li key={index}>{feat}</li>
          ))}
        </ul>
        
        <p className="desc">{project.description}</p>
        {/* Add more details like technologies used, links, etc. */}
      </div>
    </div>
  );
}
