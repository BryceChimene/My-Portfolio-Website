export default function Button(props) {
    return <button className="bottom-buttons">
        {props.img}
        <h4>{props.text}</h4>
    </button>
}