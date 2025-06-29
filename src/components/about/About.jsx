import './About.css'

import Avatar1 from '../../assets/Avatar1'
import EmailIcon from '../../assets/hero/EmailIcon'
import GithubIcon from '../../assets/hero/GithubIcon'
import LinkedinIcon from '../../assets/hero/LinkedinIcon'
import InstagramIcon from '../../assets/hero/InstagramIcon'
import Timeline from './Timeline'

export default function About() {
    return <div id="about-section" className="section">
        <div className='about-container'>
            <Avatar1 />
            <div>
                <h3>Bryce</h3>
                <h4>Powell-Chimene</h4>
                <hr/>
                <p>
                    Hi, I'm Bryce Powell-Chimene, an aspiring Software Engineer based in Houston, TX, and a 2024 graduate of Texas Lutheran University. I’m passionate about building purposeful web applications with a strong focus on UI/UX design— I design with intent and code with passion.
                </p>
                <br/>
                <p>
                    I'm always looking to grow, collaborate, and connect with others in tech. Feel free to explore my work and reach out if you have any questions or just want to connect on LinkedIn!
                </p>
            </div>
            <div className='about-buttons'>
                <a target="_blank" href="mailto:brycechimene@yahoo.com"><EmailIcon /></a>
                <a target="_blank" href="https://github.com/BryceChimene"><GithubIcon /></a>
                <a target="_blank" href="https://www.linkedin.com/in/chimenebryce/"><LinkedinIcon /></a>
                <a target="_blank" href="https://www.instagram.com/bryce.chimene/"><InstagramIcon /></a>
            </div>
        </div>
        <Timeline />
    </div>
}