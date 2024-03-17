import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import TransitionEffect from "@/components/TransitionEffect";
import { projectPageTitle, projectsData } from "@/data/projects";
import { getPageMetadata } from "@/lib/utils";

import { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("PRojects");

const ProjectsPage = () => {
  const featuredProjects = projectsData.filter((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);

  return (
    <>
      {/* <TransitionEffect /> */}
      <main className="flex flex-col items-center justify-center w-full mb-16">
        {/* TODO: Review purpose and use of container */}
        <Container className="pt-16">
          {/* TODO: Update text and image */}
          <AnimatedText
            text={projectPageTitle}
            className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {featuredProjects.map((project) => (
              <div key={project.title} className="col-span-12">
                <FeaturedProject {...project} />
              </div>
            ))}
            {otherProjects.map((project) => (
              <div key={project.title} className="col-span-6 sm:col-span-12">
                <Project {...project} />
              </div>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
};

export default ProjectsPage;
