import Project from './Project'

export default function ProjectCarousel() {
    return <div className="project-carousel-container">
        <Project 
            img="src/assets/portfolio/hometown_image.png"
            subheading="FREELANCE PROJECT"
            heading="HomeTown Fitness"
        />
        <Project 
            img="src/assets/portfolio/body_image.png"
            subheading="PERSONAL PROJECT"
            heading="Body Builder"
        />
        <Project 
            img="src/assets/portfolio/portfolio_image.png"
            subheading="PERSONAL PROJECT"
            heading="Portfolio"
        />
    </div>
}