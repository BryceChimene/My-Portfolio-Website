import React from "react"

export default function TimelineEvent(props) {
    return <div className="timeline-event">
        <span>{props.topText}</span>
        <div className="timeline-icon-container">{props.icon}</div>
        <span>{props.bottomText}</span>
    </div>
}