"use client";

import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-default gap-x-1 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold absolute  flex lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light py-3 px-6 shadow-dark"
    >
      {/* <Icon icon={reactIcon} className="w-6 h-6" /> */}
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl md:text-6xl md:mt-32 mt-64 w-full text-center">
        Skills
      </h2>
      <div
        className="w-full lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-default flex lg:p-6 md:p-4 xs:text-xs xs:p-2 items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light  p-8 shadow-dark"
        >
          Web
        </motion.div>

        <Skill name="NextJS" x="-24vw" y="-2vw" />
        <Skill name="React" x="-5vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="15vw" y="8vw" />
        <Skill name="NodeJS" x="5vw" y="18vw" />
        <Skill name="SQL" x="20vw" y="-8vw" />
        <Skill name="ExpressJS" x="-20vw" y="-17vw" />
        <Skill name="T3 Stack" x="7vw" y="-20vw" />
        <Skill name="GraphQL" x="-14vw" y="14vw" />
        <Skill name="HTML" x="-10vw" y="6vw" />
        <Skill name="CSS" x="9vw" y="-5vw" />
      </div>
    </>
  );
};

export default Skills;
