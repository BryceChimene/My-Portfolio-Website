import './Footer.css'

import EmailIcon from '../../assets/hero/EmailIcon'
import GithubIcon from '../../assets/hero/GithubIcon'
import LinkedinIcon from '../../assets/hero/LinkedinIcon'
import InstagramIcon from '../../assets/hero/InstagramIcon'

export default function Footer() {
    return <div id='footer-section'>
        <div className='footer-icons'>
            <EmailIcon />
            <GithubIcon />
            <LinkedinIcon />
            <InstagramIcon />
        </div>
        <p><span>© Bryce Powell-Chimene 2025</span></p>
    </div>
}