import React, { useState } from 'react';
import { ToggleTheme } from './toggle_theme/ToggleTheme'
import './NavBar.css'
import Avatar1 from '../../assets/Avatar1'

export default function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    return <div className="navbar-container">
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
                    <a><h4>ABOUT</h4></a>
                    <a><h4>PORTFOLIO</h4></a>
                    <a><h4>TECH</h4></a>
                </div>
            </div>

        </div>
    </div>
}