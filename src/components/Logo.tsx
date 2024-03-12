"use client";

import { motion } from "framer-motion";

import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      {/* TODO: Change colors or complete animation */}
      <MotionLink
        href="/"
        className="w-16 h-16 bg-purple-950 dark:border-light border border-solid border-transparent text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#3b0764", // purple-950
            "#6b21a8", // purple-800
            "#2e1065", // violet-950,
            "#5b21b6", // violet-800,
            "#3b0764", // purple-950
          ],
          transition: { duration: 4, repeat: Infinity },
        }}
      >
        AC
      </MotionLink>
    </div>
  );
};

export default Logo;
