import {
  ExpressIcon,
  FramerIcon,
  MUIIcon,
  NextIcon,
  OpenAIIcon,
  PostgresIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "@/components/Icons";

import portfolioDescription from "./projects/portfolio";

export const experiences = [
  {
    position: "Full Stack Engineer",
    company: "Simple Day Planner",
    companyLink: "https://simpledayplanner.com",
    time: "2023-Present",
    work: "Ideated, designed and built the Simple Day Planner app including front-end and back-end",
  },
  {
    position: "Full Stack Engineer",
    company: "Smart Apply",
    companyLink: "https://snartapply.app",
    time: "2023-Present",
    address: "Mountain View, CA",
    work: "Ideated, designed and built the SnartApply.app app including front-end, back-end and integration with Open AI's GPT-3 API",
  },
  {
    position: "Full Stack Engineer",
    company: "The Lily Pad",
    // companyLink: "https://discord.gg/azz3ccJH",
    time: "2022-2023",
    work: "Part of a team of five building a web3 learning portal with proof of knowledge NFTs. I was responsible for the front-end and back-end development and integration with smart contracts.",
  },
  {
    position: "Data and AI Delivery Lead",
    company: "Accenture",
    companyLink: "https://www.accenture.com",
    time: "2007-2023",
    work: "Implemented data and AI solution for major corporations, taking part in the design, engineering and management of the projects.",
  },
];

export const educations = [
  {
    type: "Full Stack Open",
    place: "University of Helsinki, Finland",
  },
  {
    type: "Master Degree in Computer Science",
    place: "Università degli studi di Milano, Milan, Italy",
  },
];

export const techIcons = {
  React: ReactIcon,
  "Next.JS": NextIcon,
  TypeScript: TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  Framer: FramerIcon,
  PostgreSQL: PostgresIcon,
  "Open AI": OpenAIIcon,
  "Material UI": MUIIcon,
  "Express.js": ExpressIcon,
};

type Project = {
  id: string;
  image: string;
  title: string;
  summary: string;
  description: string;
  quickStart?: string;
  type: string;
  url: string;
  githubUrl?: string;
  techs: string[];
};

export const projectsData: { [id: string]: Project } = {
  simpledayplanner: {
    id: "simpledayplanner",
    image: "simpledayplanner.jpg",
    title: "Simple Day Planner",
    description:
      "Not a to-do list, not a calendar, but a simple way to plan your day at a glance.",
    summary:
      "Not a to-do list, not a calendar, but a simple way to plan your day at a glance.",
    type: "Full-stack",
    url: "https://www.simpledayplanner.com/",
    techs: [
      "Next.JS",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer",
      "PostgreSQL",
    ],
  },
  smartapply: {
    id: "smartapply",
    image: "smartapply.jpg",
    title: "Smart Apply",
    summary:
      "AI powered tools to help with job applications: personalized cover letters, interview simulation and multiple choice questions to help you land your dream job.",
    description: "AI powered tools to help with job applications.",
    type: "Full-stack",
    url: "https://www.smartapply.app/",
    techs: [
      "Next.JS",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Open AI",
    ],
  },
  coverletterai: {
    id: "coverletterai",
    image: "coverLettersAi.jpg",
    title: "Cover Letters AIy",
    description:
      "Simple application to generate cover letters based on a user profile and a job description. Powered by OpenAI's GPT-3 API.",
    summary:
      "Simple application to generate cover letters based on a user profile and a job description. Powered by OpenAI's GPT-3 API.",
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
  perfi: {
    id: "perfi",
    image: "perfi.jpg",
    title: "Perfi",
    description:
      "Perfi is a personal finance app that leverage open banking to retrieve transactions data from financial institution accounts, and provide spending stats.",
    summary:
      "Perfi is a personal finance app that leverage open banking to retrieve transactions data from financial institution accounts, and provide spending stats.",
    type: "Full-stack",
    url: "https://perfi-app.onrender.com",
    githubUrl: "https://github.com/Mirthis/perfi",
    techs: ["TypeScript", "React", "Express.js", "PostgreSQL", "Material UI"],
  },
  poknft: {
    id: "pok",
    image: "pok.jpg",
    title: "PoK NFT Viewer",
    description:
      "This simple web app allows to browse Proof of Knowlege NFTs and display the one owned by the user based on their wallet address.",
    summary:
      "This simple web app allows to browse Proof of Knowlege NFTs and display the one owned by the user based on their wallet address.",
    type: "Front-end / Web3",
    url: "https://pok-nfts.vercel.app/",
    githubUrl: "https://github.com/Mirthis/pok-nfts",
    techs: ["Next.JS", "React", "TypeScript", "Tailwind CSS"],
  },
  portfolio: {
    id: "portfolio",
    image: "portfolio-v2.jpg",
    title: "Portfolio",
    summary: "This is the site you're currently browsing :)",
    description: portfolioDescription,
    quickStart: "# Hi, *Pluto*! `ddd`",
    type: "Front-end",
    url: "https://www.andreacardinale.me/",
    githubUrl: "https://github.com/Mirthis/portfolio",
    techs: ["Next.JS", "React", "TypeScript", "Tailwind CSS", "Framer"],
  },
};

export const aboutStats: Array<{ stat: number; description: string }> = [
  {
    stat: 5,
    description: "Satisfied clients",
  },
  {
    stat: 10,
    description: "Projects completed",
  },
  {
    stat: 2,
    description: "years of experience",
  },
];
