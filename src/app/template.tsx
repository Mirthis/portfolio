"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.main
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary dark:bg-primaryDark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        key="LandingPage"
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      />
      {children}
    </>
  );
}
