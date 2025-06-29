import TimelineEvent from "./TimelineEvent";

import GraduationIcon from "../../assets/about_timeline/GraduationIcon";
import CodeIcon from "../../assets/about_timeline/CodeIcon";
import CertificateIcon from "../../assets/about_timeline/CertificateIcon";

export default function Timeline() {
    return <div className="timeline-container">
        <hr className="timeline-line"/>
        <TimelineEvent 
            topText={<>Graduated from<br />Texas Lutheran University</>}
            icon={<GraduationIcon />}
            bottomText={<>05/2024<br /><br /></>}
        />
        <TimelineEvent 
            topText={<><br />09/2024</>}
            icon={<CodeIcon />}
            bottomText={<>Freelance Web Developer<br />HomeTown Fitness</>}
        />
        <TimelineEvent 
            topText={<>React/TypeScript<br />Developer Intern at Tern</>}
            icon={<CertificateIcon />}
            bottomText={<>05/2024<br /><br /></>}
        />
        <TimelineEvent 
            topText={<><br />Present</>}
            icon={<CertificateIcon />}
            bottomText={<>FullStack Web<br />Development Bootcamp</>}
        />
    </div>
}