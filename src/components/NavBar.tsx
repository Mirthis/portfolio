"use client";

import { homeData } from "@/data/home";
import { showContactModal } from "@/lib/state";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useAtom } from "jotai";

import { useState } from "react";

import ContactDialog from "./ContactDialog";
import ContactTrigger from "./ContactTrigger";
import CustomLink from "./CustomLink";
import CustomMobileLink from "./CustomMobileLink";
import IconLink from "./IconLink";
import { EmailIcon, GithubIcon, LinkedInIcon, XIcon } from "./Icons";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  // {
  //   name: "Articles",
  //   path: "/articles",
  // },
];

const socialLinks = [
  {
    name: "Github",
    path: homeData.githubUrl,
    Icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    path: homeData.linkedinUrl,
    Icon: LinkedInIcon,
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="px-32 py-8 lg:px-16 sm:px-8 md:px-12 font-medium flex justify-between items-center relative">
        <button
          className="lg:flex hidden flex-col justify-center items-center space-y-1"
          onClick={handleMenuIconClick}
        >
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all ease-out duration-300 ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all ease-out duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all ease-out duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>

        <div className="w-full flex justify-between items-center lg:hidden">
          <nav className="space-x-8">
            {navLinks.map((link, index) => (
              <CustomLink
                key={`navLink-${index}`}
                href={link.path}
                title={link.name}
              />
            ))}
          </nav>

          <nav className="flex justify-center items-center flex-wrap space-x-6">
            {socialLinks.map((link, index) => (
              <IconLink
                key={index}
                href={link.path}
                Icon={link.Icon}
                className="w-6 h-6"
              />
            ))}
            <ContactTrigger>
              <button className="hover:cursor-pointer  flex items-center justify-center">
                <EmailIcon className="text-red-500 w-6 h-6" />
              </button>
            </ContactTrigger>
            <ThemeSwitcher />
          </nav>
        </div>

        {isOpen && (
          <>
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-dark/80 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow  fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] border translate-x-[-50%] translate-y-[-50%] rounded-[6px] dark:bg-dark bg-light p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                  {/* className="min-w-[70vw] space-y-8 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 z-30  flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" */}

                  <div className="space-y-8 py-8">
                    <nav className="space-y-4 flex items-center flex-col justify-center">
                      {navLinks.map((link, index) => (
                        <CustomMobileLink
                          key={`navLink-${index}`}
                          href={link.path}
                          title={link.name}
                          setMenuOpen={setIsOpen}
                        />
                      ))}
                    </nav>

                    <nav className="flex justify-center items-center text-dark dark:text-light flex-wrap gap-x-6 sm:gap-x-2">
                      {socialLinks.map((link, index) => (
                        <IconLink
                          key={index}
                          href={link.path}
                          Icon={link.Icon}
                          className="w-8 h-8"
                        />
                      ))}
                      <ContactTrigger>
                        <button className="hover:cursor-pointer flex items-center justify-center">
                          <EmailIcon className="text-red-500 w-8 h-8" />
                        </button>
                      </ContactTrigger>
                      <ThemeSwitcher />
                    </nav>
                  </div>

                  <Dialog.Close asChild>
                    <button
                      className="dark:text-light text-dark hover:border  hover:border-dark hover:dark:border-light absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                      aria-label="Close"
                    >
                      <XIcon className="w-6" />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </>
        )}

        <div className="absolute left-[50%] translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
