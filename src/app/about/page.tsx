import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { aboutStats } from "@/data/staticData";
import { getPageMetadata } from "@/lib/utils";

import { Metadata } from "next";
import Image from "next/image";

import profilePicture from "/public/images/profile.jpg";

export const metadata: Metadata = getPageMetadata("About");

const AboutPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16">
        <Container className="pt-16">
          {/* TODO: Update text and image */}
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 md:col-span-8 flex md:order-2 flex-col items-start justify-start xl:col-span-4">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <div className="font-medium space-y-4">
                <p>
                  Hi, I&apos;m Andrea, I&apos;m a full-stack web engineer and
                  I&apos;m passionate about technology, coding and building
                  modern and innovative applications.
                </p>
                <p>
                  I built my first website in the web 1.0 era but life led me
                  down a less technical path. Despite that, my passion for
                  coding persisted, drawing me back to web development time and
                  again. Now, I&apos;ve decided to transform this enjoyable
                  passtime into a profession that truly ignites my enthusiasm.
                </p>
                <p>
                  When I work on a new project, I always try to bring a fresh
                  and innovative approach to the table, and I am always looking
                  for new and better ways to solve problems and create
                  intuitive, enjoyable experiences for users.
                </p>
                <p>
                  I look forward to the opportunity to bring my skills,
                  expertise and passion to your next project.
                </p>
              </div>
            </div>
            <div className="col-span-3 xl:col-span-4 md:col-span-8 md:order-1 relative h-max rounded-2xl bg-dark/20 dark:bg-light/20 p-2">
              {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" /> */}
              <Image
                alt="Andrea Cardainele"
                src={profilePicture}
                className="w-full h-auto rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-wdith: 1280px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex md:order-3 flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center">
              {aboutStats.map(({ stat, description }, i) => (
                <div
                  key={`about-stat-${i}`}
                  className="flex flex-col items-end xl:items-center justify-center"
                >
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumber value={stat} />+
                  </span>
                  <h2 className="text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75">
                    {description}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Container>
      </main>
    </>
  );
};

export default AboutPage;
