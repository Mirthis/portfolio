"use client";

import {
  AnimationPlaybackControls,
  useAnimate,
  useInView,
} from "framer-motion";

// import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";

const TICKER_DIRECTION_LEFT = -1;
const TICKER_DIRECTION_RIGHT = 1;

type TickerProps = {
  children: JSX.Element[];
  duration?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isPlaying?: boolean;
  direction?: number;
};

const noop = () => {};

const Ticker = (props: TickerProps) => {
  const defaultOnMouseEnter = () => {
    animationControls?.pause();
  };
  const defaultOnMouseLeave = () => {
    animationControls?.play();
  };
  const {
    children,
    duration = 5,
    onMouseEnter = defaultOnMouseEnter,
    onMouseLeave = defaultOnMouseLeave,
    isPlaying = true,
    direction = TICKER_DIRECTION_LEFT,
  } = props;
  const tickerRef = useRef<HTMLDivElement>(null);
  const [tickerUUID, setTickerUUID] = useState<string>("");
  const [tickerContentWidth, setTickerContentWidth] = useState<number | null>(
    0,
  );
  const [numDupes, setNumDupes] = useState<number>(1);
  const [scope, animate] = useAnimate();
  const [animationControls, setAnimationControls] = useState<
    AnimationPlaybackControls | undefined
  >(undefined);
  const isInView = useInView(scope);

  useEffect(() => {
    setTickerUUID("3sd3i24djkfkl");
  }, []);

  useEffect(() => {
    let contentWidth = 0;

    for (let index = 0; index < children.length; index++) {
      const element = document.getElementById(tickerUUID + "_" + index)
        ?.clientWidth;
      if (element) {
        contentWidth += element;
      }
    }

    setTickerContentWidth(contentWidth);
  }, [children.length, tickerUUID]);

  useEffect(() => {
    if (tickerRef.current && tickerContentWidth) {
      setNumDupes(
        Math.max(
          Math.ceil((2 * tickerRef.current.clientWidth) / tickerContentWidth),
          1,
        ),
      );
    }
  }, [tickerContentWidth]);

  useEffect(() => {
    if (isInView && !animationControls) {
      const controls = animate(
        scope.current,
        { x: tickerContentWidth ? tickerContentWidth * direction : 0 },
        { ease: "linear", duration, repeat: Infinity },
      );
      controls.play();
      setAnimationControls(controls);
    }
  }, [
    animate,
    animationControls,
    direction,
    duration,
    isInView,
    scope,
    tickerContentWidth,
  ]);

  useEffect(() => {
    if (animationControls) {
      if (!isInView || !isPlaying) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isInView, isPlaying, animationControls]);

  return (
    <div
      className="w-full  overflow-hidden bg-dark/20 dark:bg-light/20 p-2 "
      ref={tickerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={scope}
        className="flex"
        // initial={false}
        // animate={{ x: tickerContentWidth * direction }}
        // transition={{ ease: 'linear', duration, repeat: Infinity }}
      >
        {children.map((item, index) => (
          <div key={index} id={`${tickerUUID}_${index}`}>
            {item}
          </div>
        ))}
        {[...Array(numDupes)].map((_) =>
          children.map((item, index) => <div key={index}>{item}</div>),
        )}
      </div>
    </div>
  );
};

export default Ticker;

export { TICKER_DIRECTION_LEFT, TICKER_DIRECTION_RIGHT };
