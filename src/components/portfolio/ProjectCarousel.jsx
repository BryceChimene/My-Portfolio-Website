import Project from './Project'

export default function ProjectCarousel({ projects }) {
    return <div className="project-carousel-container">
        {projects.map((project, index) => (
            <Project
                key={index}
                index={index}
                img={project.img}
                subheading={project.projectType}
                heading={project.title}
            />
        ))}
    </div>
}