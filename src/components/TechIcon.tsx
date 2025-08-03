import {
  Clerk,
  Drizzle,
  ExpressIcon,
  FramerIcon,
  MUIIcon,
  NextIcon,
  OpenAIIcon,
  PayloadIcon,
  PostgresIcon,
  Prisma,
  ReactIcon,
  SQLite,
  Shadcnui,
  Stripe,
  T3,
  TailwindIcon,
  TypeScriptIcon,
} from "@/components/Icons";

export const techIcons = {
  React: ReactIcon,
  "Next.JS": NextIcon,
  TypeScript: TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  Framer: FramerIcon,
  PostgreSQL: PostgresIcon,
  "Open AI": OpenAIIcon,
  "Material UI": MUIIcon,
  "Express.js": ExpressIcon,
  Drizzle: Drizzle,
  Prisma: Prisma,
  "Shadcn UI": Shadcnui,
  "T3 Stack": T3,
  Stripe: Stripe,
  Clerk: Clerk,
  "Payload CMS": PayloadIcon,
  SQLite: SQLite,
};

const getTechIcon = (tech: string) => {
  return techIcons[tech as keyof typeof techIcons];
};

const TechIcon = ({
  tech,
  showLabel,
  className,
}: {
  tech: string;
  showLabel?: boolean;
  className?: string;
}) => {
  const Icon = getTechIcon(tech);

  return (
    <div className="relative flex gap-x-2 items-center">
      <Icon className={`${className} peer hover:scale-110 transition-all`} />
      {/* <Icon className={`${className} hover:scale-110 transition-all`} /> */}

      {showLabel ? (
        <div className="whitespace-nowrap font-semibold mr-4">{tech}</div>
      ) : (
        <div className="absolute overflow-visible whitespace-nowrap hidden peer-hover:flex flex-nowrap top-10 left-0 z-10 px-3 py-2 sm:px-1 sm:py-1 text-sm sm:text-xs font-medium dark:text-dark dark:bg-light/80 text-light bg-dark/80 rounded-lg shadow-sm w-fit">
          {tech}
        </div>
      )}
    </div>
  );
};

export default TechIcon;
