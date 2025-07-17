import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motionUtils';
import { ToggleTheme } from './toggle_theme/ToggleTheme'
import './NavBar.css'
import Avatar1 from '../../assets/icons/Avatar1'

export default function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    return <motion.div className="navbar-container"
        variants={fadeIn("up", 0.5)}
        initial="hidden" 
        animate="show"
        >
        <div className='navbar-section'>
            <a href='#hero' className='profile-container'>
                <Avatar1 />
                <h4>Bryce Powell-Chimene</h4>
            </a>
            <div className='nav-right-container'>
                <ToggleTheme isChecked={props.isDark} handleChange={props.ToggleTheme}/>

                <div
                    className={`menu-btn ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    <div className="menu-btn__burger"></div>
                </div>

                <div className={`nav-link-container ${menuOpen ? 'open' : ''}`}>
                    <a href='#about-section' onClick={() => {setMenuOpen(!menuOpen)}}><h4>ABOUT</h4></a>
                    <a href='#portfolio-section' onClick={() => {setMenuOpen(!menuOpen)}}><h4>PORTFOLIO</h4></a>
                    <a href='#tech-section' onClick={() => {setMenuOpen(!menuOpen)}}><h4>TECH</h4></a>
                </div>
            </div>
        </div>
    </motion.div>
}