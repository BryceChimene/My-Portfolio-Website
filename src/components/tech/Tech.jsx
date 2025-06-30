import './Tech.css'
import TechItem from './TechItem'

import ReactIcon from '../../assets/tech/react.png';
import TailwindIcon from '../../assets/tech/tailwind.png';
import JavascriptIcon from '../../assets/tech/javascript.png';
import BootstrapIcoin from '../../assets/tech/bootstrap.png';
import HtmlIcon from '../../assets/tech/html.png';
import CssIcon from '../../assets/tech/css.png';
import FigmaIcon from '../../assets/tech/figma.png';

import NodeIcon from '../../assets/tech/node.png';
import ViteIcon from '../../assets/tech/vite.png';
import MySQLIcon from '../../assets/tech/mysql.png';
import PostgreSQLIcon from '../../assets/tech/postgres.png';
import FlutterIcon from '../../assets/tech/flutter.png';
import APIIcon from '../../assets/tech/api.png';
import FirebaseIcon from '../../assets/tech/firebase.png';

import VSCodeIcon from '../../assets/tech/vscode.png';
import GitIcon from '../../assets/tech/git.png';
import NPMIcon from '../../assets/tech/npm.png';
import pgAdminIcon from '../../assets/tech/pgadmin.png';
import PostmanIcon from '../../assets/tech/postman.png';
import AxiosIcon from '../../assets/tech/axios.png';

export default function Tech() {
    const frontend = [
        {
            icon:ReactIcon,
            title:"React"
        },
        {
            icon:TailwindIcon,
            title:"Tailwind CSS"
        },
        {
            icon:JavascriptIcon,
            title:"Javascript"
        },
        {
            icon:BootstrapIcoin,
            title:"Bootstrap"
        },
        {
            icon:HtmlIcon,
            title:"HTML"
        },
        {
            icon:CssIcon,
            title:"CSS"
        },
        {
            icon:FigmaIcon,
            title:"Figma"
        },
    ]
    const backend = [
        {
            icon:NodeIcon,
            title:"Node"
        },
        {
            icon:ViteIcon,
            title:"Vite"
        },
        {
            icon:MySQLIcon,
            title:"MySQL"
        },
        {
            icon:PostgreSQLIcon,
            title:"PostgreSQL"
        },
        {
            icon:FlutterIcon,
            title:"Flutter with Dart"
        },
        {
            icon:APIIcon,
            title:"REST APIs"
        },
        {
            icon:JavascriptIcon,
            title:"Javascript"
        },
        {
            icon:FirebaseIcon,
            title:"FirebaseIcon"
        },
    ]
    const tools = [
        {
            icon:VSCodeIcon,
            title:"VS Code"
        },
        {
            icon:GitIcon,
            title:"Git"
        },
        {
            icon:NPMIcon,
            title:"NPM"
        },
        {
            icon:pgAdminIcon,
            title:"pgAdmin"
        },
        {
            icon:PostmanIcon,
            title:"Postman"
        },
        {
            icon:FigmaIcon,
            title:"Figma"
        },
        {
            icon:AxiosIcon,
            title:"Axios"
        },
    ]

    return <div id='tech-section' className='section'>
        <div className='tech-container'>
            <h2>Tech Stack</h2>
            <h4>Frontend</h4>
            <div className='tech-list'>
                {frontend.map((item, index) => (
                    <TechItem 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </div>
            <h4>Backend</h4>
            <div className='tech-list'>
                {backend.map((item, index) => (
                    <TechItem 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </div>
            <h4>Tools</h4>
            <div className='tech-list'>
                {tools.map((item, index) => (
                    <TechItem 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    </div>
}