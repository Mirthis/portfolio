import React from "react";

import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <p>My portfolio site with details about myself and my latest projects.</p>
      <p>
        This is the second version and the most notable aspect is the use of
        Framer Motion to create the animations and transitions between pages.
      </p>
      <p>
        You can check out the code and details on how to use this as template
        for your portfolio on{" "}
        <Link href="https://github.com/Mirthis/portfolio" target="_blank">
          Github
        </Link>
      </p>
    </>
  );
};

export default Portfolio;
