import ContactTrigger from "./ContactTrigger";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed md:absolute right-4  md:top-0 md:bottom-auto bottom-4 flex items-center justify-center overflow-hidden">
      <div className="h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark dark:fill-light   animate-spin-slow w-48 h-48 md:w-24 md:h-24" />
        <ContactTrigger>
          <button className="flex z-50 items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:hover:bg-dark dark:hover:text-light bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark md:text-[10px] dark:border-light w-20 h-20 md:w-12 md:h-12 rounded-full font-semibold hover:bg-light hover:text-dark">
            Hire Me
          </button>
        </ContactTrigger>
      </div>
    </div>
  );
};

export default HireMe;
