import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motionUtils';

export default function Project(props) {
    return <motion.div 
        className="project-container"
        variants={fadeIn("left", (props.index * .2))}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        >
        <img src={props.img} alt="Portfolio Project Image" />
        <p>{props.subheading}</p>
        <h3>{props.heading}</h3>
    </motion.div>
}