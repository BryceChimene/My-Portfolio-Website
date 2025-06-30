export default function TechItem(props) {
    return <div className="tech-item">
        <img src={props.icon} alt={props.title} />
        <p>{props.title}</p>
    </div>
}