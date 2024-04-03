import Image from "next/image";
import Link from "next/link";

import { GithubIcon } from "./Icons";
import TechIcon from "./TechIcon";

const Project = ({
  id,
  type,
  title,
  coverImage,
  images,
  url,
  githubUrl,
  techs,
}: {
  id: string;
  type: string;
  title: string;
  coverImage: string;
  images?: string[];
  url: string;
  githubUrl?: string;
  techs: string[];
}) => {
  return (
    <article className="p-6 w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark relative xs:p-4">
      <div className="absolute top-0 -right-3 md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem] -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl " />

      <Link
        href={`projects/${id}`}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={`/images/projects/${id}/${coverImage}`}
          alt={title}
          className="w-full h-auto"
          width={1280}
          height={720}
        />
      </Link>
      <div className="w-full flex flex-col space-y-2 items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={`projects/${id}`}
          className="hover:undeline underline-offset-2"
        >
          <h2 className=" w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex gap-x-1">
          {techs.map((tech) => (
            <TechIcon
              key={tech}
              tech={tech}
              className="w-7 h-7 sm:h-5  sm:w-5"
            />
          ))}
        </div>
        <div className=" flex items-center space-x-4 justify-between w-full">
          <Link
            href={url}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          {githubUrl && (
            <Link href={githubUrl} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
