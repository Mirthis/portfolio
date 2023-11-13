// "use client";
import AnimatedText from "@/components/AnimatedText";
import ContactDialog from "@/components/ContactDialog";
import ContactTrigger from "@/components/ContactTrigger";
import Container from "@/components/Container";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import { getPageMetadata, getPageTitle } from "@/lib/utils";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import heroPicture from "/public/images/hero.png";

export const metadata: Metadata = getPageMetadata("Home");

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen">
        <Container className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            {/* TODO: Replace with a real image */}
            <div className="w-1/2 md:w-full">
              <Image
                alt="Andrea Cardinale"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                src={heroPicture}
                priority
                sizes="(max-width: 768px) 100vw, (max-wdith: 1280px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center lg:w-full lg:text-center">
              <AnimatedText
                text="Seamless Solutions, Infinite Possibilities"
                className="text-6xl text-left xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl"
              />
              <p className="my-4 font-medium md:text-sm sm:text-xs">
                I am dedicated to turning ideas into innovative and modern web
                applications. Learn more about my full-stack development
                experience and how I can help make your digital dreams come
                tryue by exploring my bio and latest projects.
                {/* My mission is to transform your digital ideas into reality with
                precision and expertise. Explore my latest web development
                projects, showcasing a diverse range of skills and innovative
                solutions. */}
              </p>
              <div className="flex space-x-4 items-center mt-2 self-start lg:self-center">
                <Link
                  href="/resume/resume.pdf"
                  target="_blank"
                  className="flex md:p-2 md:px-4 md:text-base items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light transition-all  border-transparent hover:border-dark hover:dark:border-light border-2"
                >
                  Resume <LinkArrow className="w-6 ml-1 " />
                </Link>

                <ContactTrigger>
                  <button className="hover:cursor-pointer text-lg md:text-base font-medium capitalize underline">
                    Contact
                  </button>
                </ContactTrigger>
              </div>
            </div>
          </div>
        </Container>
        <HireMe />
        {/* TODO: Remove or replace this image */}
        {/* <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image
          src={ligthbulb}
          alt="Andrea Cardinale"
          className="w-full h-auto md:hidden"
        />
      </div> */}
      </main>
    </>
  );
}
