import './Portfolio.css';
import ProjectCarousel from './ProjectCarousel';
import portfolioProjects from '../../assets/utils/portfolioUtils';

import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motionUtils';

export default function Portfolio() {
    const [highlightProject, ...carouselProjects] = portfolioProjects;

    return (
        <div id="portfolio-section" className="section">
            <div className="portfolio-container">
                <h2>Portfolio</h2>

                <motion.div 
                    className="highlight-container"
                    variants={fadeIn("left", 0.4)}
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

                <ProjectCarousel projects={carouselProjects} />
            </div>
        </div>
    );
}
