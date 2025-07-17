import ContactIcon from '../../assets/icons/hero/ContactIcon';
import CityIcon from '../../assets/icons/hero/CityIcon';
import DevIcon from '../../assets/icons/hero/DevIcon'; 


export default function HeroTextAnimation() {
    return <div className="flip">
        <div><h3>Let's Chat <ContactIcon /></h3></div>
        <div><h3>Software Developer <DevIcon /></h3></div>
        <div><h3>Based in Houston <CityIcon /></h3></div>
    </div>
}