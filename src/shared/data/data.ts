// ALL site content lives in this file.
// Values in [brackets] are placeholders — replace them with your own.

import { Database, Mail, Network } from 'lucide-react';
import { FaAws, FaLinkedin } from 'react-icons/fa6';
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import type {
  BackendProject,
  CodeSnippet,
  FrontendProject,
  NavLink,
  SkillGroup,
  SocialLink,
} from './types';

export const site = {
  name: 'Ali Deeb',
  title: 'Software Engineer',
};

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// Labels read by screen readers (not visible on the page)
export const a11y = {
  skipToContent: 'Skip to content',
  mainNav: 'Main navigation',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  socialLinks: 'Social links',
  scrollDown: 'Scroll down to the About section',
};

export const hero = {
  // Subtitle: the prefix stays, the words after it rotate one at a time
  rotatingPrefix: 'I build',
  rotatingWords: ['frontends', 'REST APIs', 'full-stack apps'],
  projectsButton: 'View Projects',
  contactButton: 'Contact Me',
  // Typed out one after another in the code editor window.
  // Keep lines under ~38 characters so they fit on phones.
  codeSnippets: [
    {
      fileName: 'Welcome.tsx',
      code: `function Welcome({ name }) {
  return (
    <section className="hero">
      <h1>Hi, I'm {name}</h1>
      <p>I build for the web.</p>
    </section>
  );
}`,
    },
    {
      fileName: 'server.js',
      code: `const app = express();

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3000);`,
    },
  ] satisfies CodeSnippet[],
};

export const about = {
  heading: 'About',
  text: "I'm a Software Engineer with a degree in Information Technology, focused on building full-stack web applications with React, TypeScript, and Node.js. I enjoy turning ideas into clean, reliable products — from designing intuitive interfaces to building scalable APIs and databases. I'm currently learning German and actively seeking opportunities to relocate to Germany, where I want to grow as an engineer and contribute to a strong engineering team. I'm also expanding my skills in cloud technologies (AWS).",
};

export const skills = {
  heading: 'Skills',
  groups: [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: SiCss },
        { name: 'SQL', icon: Database },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'REST APIs', icon: Network },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Prisma', icon: SiPrisma },
        { name: 'MongoDB', icon: SiMongodb },
      ],
    },
    {
      title: 'Tools & Deployment',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Render', icon: SiRender },
        { name: 'AWS', icon: FaAws, note: 'learning' },
      ],
    },
  ] satisfies SkillGroup[],
};

const frontendProjects: FrontendProject[] = [
  {
    kind: 'frontend',
    name: 'LifeStyle — Health & fitness dashboard.',
    description: 'A health platform that combines body measurements, sleep habits, and fitness metrics into one health score, and displays personalized workout programs and sleep-efficiency predictions. Built as a 2-person team — I owned the entire frontend and its integration with the Django REST API: React 19 and TypeScript with a feature-based architecture, JWT authentication (automatic token refresh, protected routes), centralized error handling, and unit tests in Vitest.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Zustand', 'Zod', 'Vitest'],
    liveUrl: 'https://lifestyle-frontend-qdvi.onrender.com',
    githubUrl: 'https://github.com/Ali-deeb133/lifestyle-frontend',
    // Put your screenshot in public/projects/ and point to it, e.g. '/projects/project-1.png'
    image: '/projects/lifestyle.webp',
    imageAlt: 'Screenshot of [Frontend Project 1]',
  },
  {
    kind: 'frontend',
    name: ' Skincare e-commerce web app',
    description: 'responsive skincare store with product search and filtering, a persistent shopping cart, and user authentication. Its standout feature is a skincare assistant that checks whether a product suits the user',
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Zustand", "Axios"],
    liveUrl: 'https://skincare-frontend-841j.onrender.com',
    githubUrl: 'https://github.com/Ali-deeb133/skincare_frontend',
    image: '/projects/skincare.webp',
    imageAlt: 'Screenshot of [Frontend Project 2]',
  },
];

const backendProjects: BackendProject[] = [
  {
    kind: 'backend',
    name: 'Urban Safety Reporting Platform',
    description: 'A REST API for a civic platform where citizens report urban safety issues and municipal staff review and resolve them. Built around role-based workflows with a state machine for report status, and includes interactive Swagger documentation with demo accounts.',
    stack: ['Node.js Express TypeScript PostgreSQL Prisma Supabase Swagger'],
    features: ['Role-based access (citizen, staff, admin) with a report status workflow', 'Duplicate detection by category, location, and time window', 'Image uploads via Supabase Storage'],
    liveUrl: 'http://urban-safety-platform-backend.onrender.com/api-docs',
    githubUrl: 'https://github.com/Ali-deeb133/urban-safety-platform',
    // Shown in the code-style visual on the card
    codeSample: `GET /api/v1/health
GET  /api/v1/profiles/me
POST /api/v1/reports`,
  },
];

export const projects = {
  heading: 'Projects',
  frontendHeading: 'Frontend Projects',
  backendHeading: 'Backend Projects',
  frontend: frontendProjects,
  backend: backendProjects,
  liveButton: 'Live Demo',
  githubButton: 'GitHub',
  note: 'Live demos are hosted on a free tier and may take ~30 seconds to wake up.',
};

// Free-tier backends pinged silently on page load so live demos wake up faster.
export const wakeUpUrls: string[] = [
  'https://skincare-backend-2str.onrender.com',
  'https://lifestyle-backend-05r7.onrender.com',
  'https://urban-safety-platform-backend.onrender.com',
];

export const contact = {
  heading: 'Contact',
  text: 'Open to job opportunities and relocation to Germany. Feel free to reach out.',
};

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: 'mailto:deeb10957@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alideeb-dev/?isSelfProfile=true', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/Ali-deeb133', icon: SiGithub },
 
];

export const footer = {
  copyright: `© 2026 ${site.name}`,
};
