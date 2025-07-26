// Contains all projects for the portfolio section
// Note: The first index is the highlighted project
import ternImg from '../icons/portfolio/tern_image.png';
import hometownImg from '../icons/portfolio/hometown_image.png';
import bodyImg from '../icons/portfolio/body_image.png';
import portfolioImg from '../icons/portfolio/portfolio_image.png';

const portfolioProjects = [
  {
    id: "Tern",
    title: "Tern",
    projectType: "Full-Stack Software Developer Intern",
    img: ternImg,
    link: [
      {
        text: "Website",
        src: "https://www.tern.ac/subscriptions",
      },
    ],
    tech: ["React", "Tailwind", "TypeScript", "Git", "HTML", "Figma", "VScode"],
    description:
      "Short but insight Intership with Tern.ac. I applied in demand frameworks such as TypeScript and Tailwind to productivly and quickly build a page for their Tern.ac website. I also established teamwork and collaboration with useing Git for version control and branch management.",
  },
  {
    id: "HomeTownFitness",
    title: "HomeTown Fitness",
    projectType: "FREELANCE PROJECT",
    img: hometownImg,
    link: [
      {
        text: "Website",
        src: "https://hometownfitness-dayton.com",
      },
    ],
    tech: ["Freelance", "API Integration", "HTML", "CSS", "Web Hosting", "Domain Connection"],
    description: "Developed a responsive and visually engaging website for a local business with over 400 returning members monthly. Increased client’s user engagement by 20% through enhanced mobile optimization and intuitive design. Integrated the Glofox Web Portal into the frontend, enabling membership management, and user authentication.",
  },
  {
    id: "project-3",
    title: "Body Builder",
    projectType: "PERSONAL PROJECT",
    img: bodyImg,
    link: [
      {
        text: "GitHub",
        src: "https://github.com/BryceChimene/Body-Builder",
      },
    ],
    tech: ["EJS", "HTML", "CSS", "RESTFUL API", "AXIOS", "JavaScript", "Node"],
    description: "Built a website using EJS that models the human anatomy allowing users to interact with each muscle group in order to list workouts from a Public API that will grow and expand that muscle. Utilized the Axios library to efficiently speed up development with a RESTFUL API by 60%.",
  },
  {
    id: "project-4",
    title: "Portfolio",
    projectType: "PERSONAL PROJECT",
    img: portfolioImg,
    link: [
      {
        text: "GitHub",
        src: "https://github.com/BryceChimene/My-Portfolio-Website",
      },
    ],
    tech: ["React", "Figma", "Vite", "HTML", "CSS", "JavaScript", "NPM"],
    description: "Utilized the React framework to utilize components and percisely mock my own design from Figma.",
  },
];

export default portfolioProjects