import "./About.css";
import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motionUtils';

import Avatar1 from "../../assets/icons/Avatar1";
import EmailIcon from "../../assets/icons/hero/EmailIcon";
import GithubIcon from "../../assets/icons/hero/GithubIcon";
import LinkedinIcon from "../../assets/icons/hero/LinkedinIcon";
import InstagramIcon from "../../assets/icons/hero/InstagramIcon";
import Timeline from "./Timeline";

export default function About() {
  return (
    <div id="about-section" className="section">
      <div className="about-container">
        <motion.div 
          className="avatar-container"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Avatar1 />
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3>Bryce</h3>
          <h4>Powell-Chimene</h4>
          <hr />
          <p>
            Hi, I'm Bryce Powell-Chimene, an aspiring Software Engineer based in Houston, TX, and a 2024 graduate of Texas Lutheran University.
            I’m passionate about building purposeful web applications with a strong focus on UI/UX design— I design with intent and code with passion.
          </p>
          <br />
          <p>
            I'm always looking to grow, collaborate, and connect with others in tech. Feel free to explore my work and reach out if you have any questions or just want to connect on LinkedIn!
          </p>
        </motion.div>

        <motion.div className="about-buttons"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.a target="_blank" rel="noreferrer" href="mailto:brycechimene@yahoo.com"
            variants={fadeIn("right", 0.2)}
          >
            <EmailIcon />
          </motion.a>
          <motion.a target="_blank" rel="noreferrer" href="https://github.com/BryceChimene"
            variants={fadeIn("right", 0.3)}
          >
            <GithubIcon />
          </motion.a>
          <motion.a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chimenebryce/"
            variants={fadeIn("right", 0.4)}
          >
            <LinkedinIcon />
          </motion.a>
          <motion.a target="_blank" rel="noreferrer" href="https://www.instagram.com/bryce.chimene/"
            variants={fadeIn("right", 0.5)}
          >
            <InstagramIcon />
          </motion.a>
        </motion.div>
      </div>
      <Timeline />
    </div>
  );
}
