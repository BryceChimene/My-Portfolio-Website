import ContactIcon from '../../assets/hero/ContactIcon';
import CityIcon from '../../assets/hero/CityIcon';
import DevIcon from '../../assets/hero/DevIcon'; 


export default function HeroSubHeader() {
    return <div className="flip">
        <div><h3>Let's Chat <ContactIcon /></h3></div>
        <div><h3>Software Developer <DevIcon /></h3></div>
        <div><h3>Based in Houston <CityIcon /></h3></div>
    </div>
}