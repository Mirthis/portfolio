import { techIcons } from "@/components/TechIcon";

import CoverLettersAI from "./projects/CoverLettersAI";
import LanguagesInLondon from "./projects/LanguagesInLondon";
import Perfi from "./projects/Perfi";
import Pok from "./projects/Pok";
import Portfolio from "./projects/Portfolio";
import SimpleDayPlanner from "./projects/SimpleDayPlanner";
import SmartApply from "./projects/SmartApply";

type Project = {
  id: string;
  coverImage: string;
  images?: string[];
  title: string;
  tagline: string;
  description: React.JSX.Element;
  type: string;
  url: string;
  githubUrl?: string;
  techs: Array<keyof typeof techIcons>;
  featured: boolean;
};

export const projectPageTitle = "Imagination Trumps Knowledge!";

export const projectsData: Project[] = [
  {
    id: "languagesinlondon",
    featured: true,
    coverImage: "languagesinlondon-1.webp",
    images: [
      "languagesinLondon-1.webp",
      "languagesinLondon-2.webp",
      "languagesinLondon-3.webp",
    ],
    title: "Languages in London",
    description: LanguagesInLondon(),
    tagline: "Language Exchange and Social Events",
    type: "Full-stack",
    url: "https://www.languages.london/",
    techs: [
      "Next.JS",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer",
      "SQLite",
      "Shadcn UI",
      "Payload CMS",
    ],
  },
  {
    id: "simpledayplanner",
    featured: true,
    coverImage: "simpledayplanner-1.jpg",
    images: [
      "simpledayplanner-2.jpg",
      "simpledayplanner-3.jpg",
      "simpledayplanner-1.jpg",
    ],
    title: "Simple Day Planner",
    description: SimpleDayPlanner(),
    tagline: "Simplify Your Day, Amplify Your Life",
    type: "Full-stack",
    url: "https://www.simpledayplanner.com/",
    techs: [
      "Next.JS",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer",
      "PostgreSQL",
      "Drizzle",
      "T3 Stack",
      "Shadcn UI",
      "Clerk",
    ],
  },
  {
    id: "smartapply",
    featured: true,
    coverImage: "smartapply-1.jpg",
    images: [
      "smartapply-2.jpg",
      "smartapply-3.jpg",
      "smartapply-4.jpg",
      "smartapply-1.jpg",
    ],
    title: "Smart Apply",
    tagline: "AI powered tools to help with job applications",
    description: SmartApply(),
    type: "Full-stack",
    url: "https://www.smartapply.app/",
    techs: [
      "Next.JS",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Open AI",
      "Prisma",
      "T3 Stack",
      "Stripe",
      "Clerk",
    ],
  },
  {
    id: "portfolio",
    featured: false,
    coverImage: "portfolio-1.jpg",
    images: ["portfolio-1.jpg", "portfolio-2.jpg", "portfolio-3.jpg"],
    title: "My Portfolio",
    tagline: "The site you are looking at :)",
    description: Portfolio(),
    type: "Front-end",
    url: "https://www.andreacardinale.me/",
    githubUrl: "https://github.com/Mirthis/portfolio",
    techs: ["Next.JS", "React", "TypeScript", "Tailwind CSS", "Framer"],
  },
  {
    id: "perfi",
    featured: false,
    coverImage: "perfi-1.jpg",
    title: "Perfi",
    description: Perfi(),
    tagline: "Expense tracker app with open banking integration.",
    type: "Full-stack",
    url: "https://perfi-app.onrender.com",
    githubUrl: "https://github.com/Mirthis/perfi",
    techs: ["TypeScript", "React", "Express.js", "PostgreSQL", "Material UI"],
  },
  {
    id: "coverlettersai",
    featured: false,
    coverImage: "coverlettersai-1.jpg",
    title: "Cover Letters AI",
    description: CoverLettersAI(),
    tagline: "Ai powered cover letter generator.",
    type: "Full-stack",
    url: "https://coverletterai.vercel.app/",
    githubUrl: "https://github.com/Mirthis/coverletterai",
    techs: [
      "Next.JS",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Open AI",
    ],
  },
  {
    id: "poknft",
    featured: false,
    coverImage: "poknft-1.jpg",
    title: "PoK NFT Viewer",
    description: Pok(),
    tagline: "Browse your PoK NFTs and see their details.",
    type: "Front-end / Web3",
    url: "https://pok-nfts.vercel.app/",
    githubUrl: "https://github.com/Mirthis/pok-nfts",
    techs: ["Next.JS", "React", "TypeScript", "Tailwind CSS"],
  },
];
