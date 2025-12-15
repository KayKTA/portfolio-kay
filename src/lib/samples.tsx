import { AirplanemodeActive, DashboardCustomize, ShoppingBag } from '@mui/icons-material';
import type { Project, Experience } from '@/lib/types';

export const PROJECT_1 : Project = {
    title: "AI Travel Agent",
    tagline: "Revolutionizing travel planning with AI",
    description: [
        <>Developed an AI-powered travel assistant that helps users plan trips based on their preferences.</>,
        <>Exif photos to extract metadata such as location, date, and camera settings.</>,
        <>Integrated OpenAI's GPT-4 to provide personalized travel recommendations and itineraries.</>,
        <>Implemented user authentication and profile management for a personalized experience.</>,
    ],
    images: ["/projects/travel1.png", "/projects/travel2.png"],
    stack: ["React", "Node.js", "OpenAI API", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    storybookUrl: "#",
    icon: <AirplanemodeActive sx={{ fontSize: 20, color: "rgb(255, 255, 255, 0.8)" }} />,
};

export const PROJECT_2 : Project = {
    title: "Smart Home Dashboard",
    tagline: "Centralized control for smart home devices",
    description: [
        <>Created a web-based dashboard to monitor and control various smart home devices.</>,
        <>Implemented real-time data visualization for energy consumption and device status.</>,
        <>Integrated with popular smart home APIs for seamless device management.</>,
        <>Developed user-friendly UI/UX for easy navigation and control.</>,
    ],
    images: ["/projects/dashboard-1.png", "/projects/dashboard-2.png"],
    stack: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    storybookUrl: "#",
    icon: <DashboardCustomize sx={{ fontSize: 20, color: "rgb(255, 255, 255, 0.8)" }} />,
};

export const PROJECT_3 : Project = {
    title: "E-Commerce Platform",
    tagline: "Scalable online store solution",
    description: [
        <>Built a full-featured e-commerce platform with product management, shopping cart, and payment integration.</>,
        <>Implemented search and filtering capabilities for easy product discovery.</>,
        <>Developed an admin panel for order management and analytics.</>,
        <>Ensured responsive design for optimal performance on all devices.</>,
    ],
    images: ["/projects/e-commerce-1.png", "/projects/e-commerce-2.png", "/projects/e-commerce-3.png"],
    stack: ["Angular", "Firebase", "Stripe API", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
    storybookUrl: "#",
    icon: <ShoppingBag sx={{ fontSize: 20, color: "rgb(255, 255, 255, 0.8)" }} />,
};

const SAMPLE_PROJECTS: Project[] = [PROJECT_1, PROJECT_2, PROJECT_3];

export { SAMPLE_PROJECTS };

export const EXPERIENCE_1 : Experience = {
    role: "Full-Stack Developer",
    company: "Innovatech Solutions",
    period: "March 2021 - Present",
    location: "San Francisco, CA",
    tagline:
        "Spearheaded the development of scalable web applications for diverse clients.",
    bullets: [
        "Led a team of 4 developers to deliver projects on time and within budget.",
        "Implemented CI/CD pipelines to streamline deployment processes.",
        "Optimized database queries, improving application performance by 25%.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    logo: "/projects/innovatech-solutions.jpg",
};

export const EXPERIENCE_2 : Experience = {
    role: "Frontend Developer",
    company: "Creative Web Agency",
    period: "July 2019 - February 2021",
    location: "Remote",
    tagline:
        "Designed and developed responsive user interfaces for various web projects.",
    bullets: [
        "Collaborated with designers to create visually appealing web pages.",
        "Enhanced application accessibility, achieving WCAG 2.1 compliance.",
    ],
    stack: ["React", "TypeScript", "MUI", "Storybook"],
    logo: "/projects/creative-web-agency.jpg",
};

export const EPERIENCE_3 : Experience = {
    role: "Intern Developer",
    company: "TechStart Inc.",
    period: "June 2018 - August 2018",
    location: "New York, NY",
    tagline:
        "Assisted in the development of internal tools and applications.",
    bullets: [
        "Contributed to front-end development using React and JavaScript.",
        "Participated in code reviews and team meetings.",
    ],
    stack: ["React", "JavaScript", "Git"],
    logo: "/projects/techstart-inc.jpg",
};

const SAMPLE_EXPERIENCES: Experience[] = [EXPERIENCE_1, EXPERIENCE_2, EPERIENCE_3];

export { SAMPLE_EXPERIENCES };
