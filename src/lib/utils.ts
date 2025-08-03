import { projectsData } from "@/data/projects";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPageTitle(title?: string) {
  const baseTitle = "Andrea Cardinale - Full-Stack Engineer";
  return title ? `${baseTitle} | ${title}` : baseTitle;
}

// TODO: update description

export const getMetaDescription = (description?: string) => {
  const baseDescription =
    "Andrea Cardinale is a full-stack engineer specializing in React, Next.js, TypeScript, and Node.js. Building modern, scalable web applications.";
  if (!description) return baseDescription;
  // Always append base for branding/SEO, but avoid duplicate base
  return description.includes("Andrea Cardinale")
    ? description
    : `${description} | ${baseDescription}`;
};

export const getMetaKeywords = () => {
  return [
    "Full Stack Development",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "T3 Stack",
    "GraphQL",
    "API Integration",
    "PWAs",
    "AI",
    "SQL",
    "NoSQL",
    "Docker",
    "AWS",
    "Express.js",
    "PostgreSQL",
    "Git",
    "Material UI",
    "Responsive Design",
    "User Experience",
    "User Interface",
    "Microservices",
    "DevOps",
    "CI/CD",
    "Software Architecture",
    "Performance Optimization",
  ];
};

export const getPageMetadata = (title?: string, description?: string) => {
  return {
    title: getPageTitle(title),
    description: getMetaDescription(description),
    keywords: getMetaKeywords(),
  };
};

export const getProjectData = (id: string) => {
  const project = projectsData.find((project) => project.id === id);
  if (!project) throw new Error("Project doesn't exist");
  return project;
};
