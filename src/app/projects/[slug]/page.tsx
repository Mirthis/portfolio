import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import { GithubIcon, Web } from "@/components/Icons";
import { ImageSlideShow } from "@/components/ImageSlideshow";
import TechIcon from "@/components/TechIcon";
import Ticker from "@/components/Ticker";
import Title from "@/components/Title";
import TransitionEffect from "@/components/TransitionEffect";
import { getProjectData } from "@/lib/utils";

import { ReactNode } from "react";
import Markdown from "react-markdown";

import Image from "next/image";
import Link from "next/link";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const projectData = getProjectData(params.slug);

  return (
    <>
      {/* <TransitionEffect /> */}
      <main className="flex flex-col items-center justify-center w-full mb-16">
        <Container className="pt-16">
          <AnimatedText
            text={projectData.title}
            className="lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-4"
          />
          <AnimatedText
            text={projectData.tagline}
            className=" lg:text-lg sm:text-base normal-case cap xs:text-sm text-xl mb-4"
          />

          <div className="mb-16 flex mx-0 items-center justify-center self-center space-x-4 sm:mb-8">
            {projectData.githubUrl && (
              <Link
                href={projectData.githubUrl}
                target="_blank"
                className="flex md:p-2 gap-x-4 md:px-4 md:text-base items-center bg-dark text-light dark:bg-light dark:text-dark p-2 px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light transition-all  border-transparent hover:border-dark hover:dark:border-light border-2"
              >
                <GithubIcon className="h-8 w-8 lg:h-6 lg:w-6" />
                Repository
              </Link>
            )}
            <Link
              href={projectData.url}
              target="_blank"
              className="flex md:p-2 gap-x-4 md:px-4 md:text-base items-center bg-dark text-light dark:bg-light dark:text-dark p-2 px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light transition-all  border-transparent hover:border-dark hover:dark:border-light border-2"
            >
              <Web className="h-8 w-8 lg:h-6 lg:w-6" />
              Website
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-8">
            <div className="space-y-8 order-1 lg:order-2">
              <article className="prose prose-slate dark:prose-invert font-medium ">
                {projectData.description && projectData.description}
              </article>
              <div>
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
            </div>

            <div className="order-2 lg:order-1">
              {projectData.images ? (
                <ImageSlideShow
                  images={projectData.images.map(
                    (image) => `/images/projects/${projectData.id}/${image}`,
                  )}
                />
              ) : (
                <div className=" rounded-2xl bg-dark/20 dark:bg-light/20 p-2 justify-center items-center">
                  <Image
                    src={`/images/projects/${projectData.id}/${projectData.coverImage}`}
                    alt={projectData.title}
                    className="w-full h-auto rounded-xl"
                    width={1280}
                    height={720}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-wdith: 1280px) 50vw, 50vw"
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default ProjectPage;
