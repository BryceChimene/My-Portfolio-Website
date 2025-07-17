// Tech Icons
import ReactIcon from '../icons/tech/react.png';
import TailwindIcon from '../icons/tech/tailwind.png';
import JavascriptIcon from '../icons/tech/javascript.png';
import BootstrapIcon from '../icons/tech/bootstrap.png';
import HtmlIcon from '../icons/tech/html.png';
import CssIcon from '../icons/tech/css.png';
import FigmaIcon from '../icons/tech/figma.png';
import NodeIcon from '../icons/tech/node.png';
import ViteIcon from '../icons/tech/vite.png';
import MySQLIcon from '../icons/tech/mysql.png';
import PostgreSQLIcon from '../icons/tech/postgres.png';
import FlutterIcon from '../icons/tech/flutter.png';
import APIIcon from '../icons/tech/api.png';
import FirebaseIcon from '../icons/tech/firebase.png';
import VSCodeIcon from '../icons/tech/vscode.png';
import GitIcon from '../icons/tech/git.png';
import NPMIcon from '../icons/tech/npm.png';
import pgAdminIcon from '../icons/tech/pgadmin.png';
import PostmanIcon from '../icons/tech/postman.png';
import AxiosIcon from '../icons/tech/axios.png';

const categories = [
  {
    title: "Frontend",
    direction: "left",
    items: [
      { icon: ReactIcon, title: "React" },
      { icon: TailwindIcon, title: "Tailwind CSS" },
      { icon: JavascriptIcon, title: "Javascript" },
      { icon: BootstrapIcon, title: "Bootstrap" },
      { icon: HtmlIcon, title: "HTML" },
      { icon: CssIcon, title: "CSS" },
      { icon: FigmaIcon, title: "Figma" },
    ],
  },
  {
    title: "Backend",
    direction: "right",
    items: [
      { icon: NodeIcon, title: "Node" },
      { icon: ViteIcon, title: "Vite" },
      { icon: MySQLIcon, title: "MySQL" },
      { icon: PostgreSQLIcon, title: "PostgreSQL" },
      { icon: FlutterIcon, title: "Flutter with Dart" },
      { icon: APIIcon, title: "REST APIs" },
      { icon: JavascriptIcon, title: "Javascript" },
      { icon: FirebaseIcon, title: "Firebase" },
    ],
  },
  {
    title: "Tools",
    direction: "left",
    items: [
      { icon: VSCodeIcon, title: "VS Code" },
      { icon: GitIcon, title: "Git" },
      { icon: NPMIcon, title: "NPM" },
      { icon: pgAdminIcon, title: "pgAdmin" },
      { icon: PostmanIcon, title: "Postman" },
      { icon: FigmaIcon, title: "Figma" },
      { icon: AxiosIcon, title: "Axios" },
    ],
  },
];

export default categories