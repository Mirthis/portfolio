import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import { GithubIcon, Web } from "@/components/Icons";
import { ImageSlideShow } from "@/components/ImageSlideshow";
import TechIcon from "@/components/TechIcon";
import Ticker from "@/components/Ticker";
import Title from "@/components/Title";
import TransitionEffect from "@/components/TransitionEffect";
import { getProjectData } from "@/lib/utils";

import Markdown from "react-markdown";

import Image from "next/image";
import Link from "next/link";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const projectData = getProjectData(params.slug);

  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16">
        <Container className="pt-16">
          <AnimatedText
            text={projectData.title}
            className="lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-4"
          />
          <AnimatedText
            text={projectData.summary}
            className=" lg:text-lg sm:text-base xs:text-sm text-xl mb-4"
          />

          <div className="mb-16 flex mx-0 items-center justify-center self-center space-x-4 sm:mb-8">
            {projectData.githubUrl && (
              <Link
                href={projectData.githubUrl}
                target="_blank"
                className="flex gap-x-4 items-center sm:px-4 lg:text-base sm:text-sm rounded-lg dark:bg-dark bg-light dark:text-light text-dark p-2 px-6 text-lg font-semibold"
              >
                <GithubIcon className="h-8 w-8 lg:h-6 lg:w-6" />
                Repository
              </Link>
            )}
            <Link
              href={projectData.url}
              target="_blank"
              className="flex gap-x-4 items-center sm:px-4 lg:text-base sm:text-sm rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold"
            >
              <Web className="h-8 w-8 lg:h-6 lg:w-6" />
              Website
            </Link>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-8 lg:grid-cols-1 lg:grid-rows-none">
            <div className="lg:order-2">
              {/* <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Project Description
              </h2> */}
              <article className="prose prose-slate dark:prose-invert lg:prose-xl">
                <p>{projectData.description}</p>
              </article>
            </div>

            <div className="row-span-2 lg:order-1">
              <ImageSlideShow
                images={[
                  `/images/projects/${projectData.image}`,
                  `/images/projects/perfi.jpg`,
                ]}
              />
            </div>
            <div className="lg:order-3">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Technology Stack
              </h2>

              <Ticker>
                {projectData.techs.map((tech) => (
                  <TechIcon
                    key={tech}
                    tech={tech}
                    showLabel={true}
                    className="w-7 h-7 sm:h-5  sm:w-5"
                  />
                ))}
              </Ticker>
            </div>
            {/* </div> */}
          </div>
        </Container>
      </main>
    </>
  );
};

export default ProjectPage;
