import './Footer.css'

import EmailIcon from '../../assets/icons/hero/EmailIcon'
import GithubIcon from '../../assets/icons/hero/GithubIcon'
import LinkedinIcon from '../../assets/icons/hero/LinkedinIcon'
import InstagramIcon from '../../assets/icons/hero/InstagramIcon'

export default function Footer() {
    return <div id='footer-section'>
        <div className='footer-icons'>
            <a href="mailto:brycechimene@yahoo.com" target="_blank"><div className='footer-icon-padding'><EmailIcon /></div></a>
            <a href="https://github.com/BryceChimene" target="_blank"><div className='footer-icon-padding'><GithubIcon /></div></a>
            <a href="https://www.linkedin.com/in/chimenebryce/" target="_blank"><div className='footer-icon-padding'><LinkedinIcon /></div></a>
            <a href="https://www.instagram.com/bryce.chimene/" target="_blank"><div className='footer-icon-padding'><InstagramIcon /></div></a>
        </div>
        <p><span>© Bryce Powell-Chimene 2025</span></p>
    </div>
}