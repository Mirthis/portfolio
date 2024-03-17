import { homeData } from "@/data/home";

import Link from "next/link";

import ContactTrigger from "./ContactTrigger";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg sm:text-base">
      <Container className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex  items-center lg:py-2">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{" "}
          by&nbsp;
          <Link
            href="http://www.andreacardinale.me"
            className="underline underline-offset-2"
          >
            {homeData.authorName}
          </Link>
        </div>
        <Link
          href="/contact"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
