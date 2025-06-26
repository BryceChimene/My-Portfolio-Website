export default function HeroHeaderButton(props) {
    return <a className="header-button" href={props.link} target="_blank">
        {props.icon}
    </a>;
}