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
    work: "Ideated, designed and built the SMartApply.app app including front-end, back-end and integration with Open AI's GPT-3 API",
  },
  {
    position: "Full Stack Engineer",
    company: "The Lily Pad",
    companyLink: "https://discord.gg/azz3ccJH",
    time: "2022-2023",
    work: "Worked on a team of five to build a web3 learning portal with proof of knowledge NFTs. I was responsible for the front-end and back-end development and integration with smart contracts.",
  },
];

export const educations = [
  {
    type: "Master Degree in Computer Science",
    place: "Università degli studi di Milano, Milan, Italy",
  },
];

export const techIcons = {
  React: ReactIcon,
  "Next.js": NextIcon,
  TypeScript: TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  Framer: FramerIcon,
  PostgreSQL: PostgresIcon,
  "Open AI": OpenAIIcon,
  "Material UI": MUIIcon,
  "Express.js": ExpressIcon,
};

export const projectsData = {
  simpledayplanner: {
    id: "simpledayplanner",
    image: "simpledayplanner.jpg",
    title: "Simple Day Planner",
    summary:
      "Not a to-do list, not a calendar, but a simple way to plan your day at a glance.",
    type: "Full-stack",
    url: "https://www.simpledayplanner.com/",
    techs: [
      "Next.js",
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
    type: "Full-stack",
    url: "https://www.smartapply.app/",
    techs: [
      "Next.js",
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
    title: "Cover Letter AI",
    summary:
      "Simple application to generate cover letters based on a user profile and a job description. Powered by OpenAI's GPT-3 API.",
    type: "Full-stack",
    url: "https://coverletterai.vercel.app/",
    githubUrl: "https://github.com/Mirthis/coverletterai",
    techs: [
      "Next.js",
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
    summary:
      "This simple web app allows to browse Proof of Knowledge NFTs and display the one owned by the user based on their wallet address.",
    type: "Front-end / Web3",
    url: "https://pok-nfts.vercel.app/",
    githubUrl: "https://github.com/Mirthis/pok-nfts",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  cryptoverse: {
    id: "cryptoverse",
    image: "cryptoverse.jpg",
    title: "Cryptoverse",
    summary:
      "Basic app leveraging CoinRanking API via RapidApi to retrieve crypto currencies data and news.",
    type: "Front-end",
    url: "https://cryptoverse-mirthis.netlify.app/",
    githubUrl: "https://github.com/Mirthis/cryptoverse-webapp",
    techs: ["React"],
  },
  portfolioV1: {
    id: "portfolioV1",
    image: "portfolio-v1.jpg",
    title: "Portfolio v1",
    summary:
      "Basic app leveraging CoinRanking API via RapidApi to retrieve crypto currencies data and news.",
npm     type: "Front-end",
    url: "https://portfolio-v1-six-rose.vercel.app/",
    githubUrl: "https://github.com/Mirthis/portfolio-v1",
    techs: ["Next.js", "React", "Tailwind CSS"],
  },
  portfolioV2: {
    id: "portfolioV2",
    image: "portfolio-v2.jpg",
    title: "Portfolio v2",
    summary: "This is the site you're currently browsing :)",
    type: "Front-end",
    url: "https://www.andreacardinale.me/",
    githubUrl: "https://github.com/Mirthis/portfolio",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer"],
  },
};

export const aboutStats: Array<{ stat: number; description: string }> = [
  {
    stat: 10,
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
