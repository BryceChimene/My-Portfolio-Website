export default function Project(props) {
    return <div className="project-container">
        <img src={props.img} alt="Portfolio Project Image" />
        <p>{props.subheading}</p>
        <h3>{props.heading}</h3>
    </div>
}