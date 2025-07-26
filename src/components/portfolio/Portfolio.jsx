import './Portfolio.css';
import ProjectCarousel from './ProjectCarousel';
import portfolioProjects from '../../assets/utils/portfolioUtils';

import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motionUtils';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    const [highlightProject, ...carouselProjects] = portfolioProjects;

    return (
        <div id="portfolio-section" className="section">
            <div className="portfolio-container">
                <h2>Portfolio</h2>

                <Link to={`/project/${highlightProject.id}`} className="highlight-link">
                    <motion.div 
                        className="highlight-container"
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <div>
                        <div>
                            <p><span>{highlightProject.projectType}</span></p>
                            <h2>{highlightProject.title}</h2>
                        </div>
                        <img src={highlightProject.img} alt={highlightProject.title} />
                        </div>
                    </motion.div>
                </Link>


                <ProjectCarousel projects={carouselProjects} />
            </div>
        </div>
    );
}
