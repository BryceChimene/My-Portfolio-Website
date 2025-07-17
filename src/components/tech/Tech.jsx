import './Tech.css';
import TechItem from './TechItem';
import categories from '../../assets/utils/techUtils';

import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motionUtils';

export default function Tech() {
  return (
    <div id='tech-section' className='section'>
      <div className='tech-container'>
        <h2>Tech Stack</h2>
        {categories.map((category, idx) => (
          <div key={idx}>
            <h4>{category.title}</h4>
            <motion.div
              className='tech-list'
              variants={fadeIn((idx % 2 === 0 ? 'left' : 'right'), 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {category.items.map((item, index) => (
                <TechItem key={index} icon={item.icon} title={item.title} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
