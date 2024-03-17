"use client";

import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

import * as React from "react";
import { useState } from "react";

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "./Icons";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ImageSlideShow = ({ images }: { images: string[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = React.useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  React.useEffect(() => {
    //automatically cycle through images
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <div className="relative overflow-hidden flex w-full h-auto rounded-2xl bg-dark/20 dark:bg-light/20 p-2 justify-center items-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="absolute top-1 left-1 w-[calc(100%-8px)] h-auto"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            src={images[imageIndex]}
            alt={`Project screenshot ${imageIndex}`}
            className="w-full h-auto rounded-xl"
            width={1280}
            height={720}
            priority
            sizes="(max-width: 768px) 100vw, (max-wdith: 1280px) 50vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>
      <Image
        alt="placeholder"
        src={images[0]}
        width={1280}
        height={720}
        className="invisible w-[calc(100%-8px)] h-auto rounded-xl border-2 dark:border-light border-dark"
        priority
        sizes="(max-width: 768px) 100vw, (max-wdith: 1280px) 50vw, 33vw"
      />
      {/* <div
        className="absolute top-[calc(50% - 20px)] xl:top-[calc(50% - 16px)] w-10 h-10 xl:w-8 xl:h-8 right-2 bg-light  text-dark hover:bg-dark hover:text-lime-50 border border-dark transition-all p-1 flex justify-center items-center select-none rounded-full cursor-pointer font-bold z-10 text-3xl"
        onClick={() => paginate(1)}
      >
        <ChevronRight />
      </div>
      <div
        className="absolute top-[calc(50% - 20px)] xl:top-[calc(50% - 16px)] w-10 h-10 xl:w-8 xl:h-8 left-2 bg-light  text-dark hover:bg-dark hover:text-lime-50 border border-dark transition-all p-1 flex justify-center items-center select-none rounded-full cursor-pointer font-bold z-10 text-3xl"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft />
      </div> */}
    </div>
  );
};
