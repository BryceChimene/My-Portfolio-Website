import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motionUtils';

import HeroHeaderButton from "./HeroHeaderButton";
import EmailIcon from '../../assets/icons/hero/EmailIcon';
import GithubIcon from '../../assets/icons/hero/GithubIcon';
import LinkedinIcon from '../../assets/icons/hero/LinkedinIcon';
import InstagramIcon from '../../assets/icons/hero/InstagramIcon';

export default function HeroHeader() {
  
  const leftButtons = [
    { icon: <EmailIcon />, link: "mailto:brycechimene@yahoo.com" },
    { icon: <GithubIcon />, link: "https://github.com/BryceChimene" },
  ];
  const rightButtons = [
    { icon: <LinkedinIcon />, link: "https://www.linkedin.com/in/chimenebryce/" },
    { icon: <InstagramIcon />, link: "https://www.instagram.com/bryce.chimene/" },
  ];

  return (
    <div className="hero-header-container">
      <motion.div
        className="hero-header-container"
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        animate="show"
      >
        {leftButtons.map((btn, i) => (
          <HeroHeaderButton key={i} icon={btn.icon} link={btn.link} />
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
      >
        <h1>Bryce Chimene</h1>
      </motion.div>

      <motion.div
        className="hero-header-container"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        animate="show"
      >
        {rightButtons.map((btn, i) => (
          <HeroHeaderButton key={i} icon={btn.icon} link={btn.link} />
        ))}
      </motion.div>
    </div>
  );
}
