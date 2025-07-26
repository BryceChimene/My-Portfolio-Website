import './Hero.css';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motionUtils';

import HeroHeader from './HeroHeader';
import HeroTextAnimation from './HeroTextAnimation';
import Button from './Button';

import Avatar1 from '../../assets/icons/Avatar1';
import ResumeIcon from '../../assets/icons/hero/ResumeIcon';
import ContactIcon from '../../assets/icons/hero/ContactIcon';

export default function Hero() {
  return (
    <div id="hero" className="hero-container">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden" 
        animate="show"
      >
        <Avatar1 />
      </motion.div>

      <HeroHeader />
      <HeroTextAnimation />  

      <div className="button-container">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden" 
          animate="show"
        >
          <a href="#portfolio-section"><Button img={<ResumeIcon />} text="Portfolio" /></a>
        </motion.div>

        <motion.a href="mailto:brycechimene@yahoo.com"
          variants={fadeIn("right", 0.3)}
          initial="hidden" 
          animate="show"
        >
          <Button img={<ContactIcon />} text="Contact" />
        </motion.a>
      </div>
    </div>
  );
}
