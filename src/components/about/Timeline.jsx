import timelineEvent from "../../assets/utils/timelineUtils"
import TimelineEvent from "./TimelineEvent";
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motionUtils';

export default function Timeline() {
    return (
        <motion.div 
            className="timeline-container"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <hr className="timeline-line" />
            {timelineEvent.map((event, index) => (
                <TimelineEvent
                    key={index}
                    topText={
                        index % 2 === 0 ? (
                            <>
                                {event.title.split(" ").slice(0, 2).join(" ")}<br />
                                {event.title.split(" ").slice(2).join(" ")}
                            </>
                        ) : (
                            <><br />{event.date}</>
                        )
                    }
                    icon={<event.icon />}
                    bottomText={
                        index % 2 === 0 ? (
                            <>{event.date}<br /><br /></>
                        ) : (
                            <>
                                {event.title.split(" ").slice(0, 3).join(" ")}<br />
                                {event.title.split(" ").slice(3).join(" ")}
                            </>
                        )
                    }
                />
            ))}
        </motion.div>
    );
}
