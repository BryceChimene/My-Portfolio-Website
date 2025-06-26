import HeroHeaderButton from "./HeroHeaderButton"

import EmailIcon from '../../assets/hero/EmailIcon';
import GithubIcon from '../../assets/hero/GithubIcon';
import LinkedinIcon from '../../assets/hero/LinkedinIcon';
import InstagramIcon from '../../assets/hero/InstagramIcon';

export default function HeroHeader() {
    return <div className="hero-header-container">
        <HeroHeaderButton icon={<EmailIcon />} link="mailto:brycechimene@yahoo.com" />
        <HeroHeaderButton icon={<GithubIcon />} link="https://github.com/BryceChimene" />
        <h1>Bryce Chimene</h1>
        <HeroHeaderButton icon={<LinkedinIcon />} link="https://www.linkedin.com/in/chimenebryce/"/>
        <HeroHeaderButton icon={<InstagramIcon />} link="https://www.instagram.com/bryce.chimene/"/>
    </div>
}