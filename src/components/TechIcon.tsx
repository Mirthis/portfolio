import { techIcons } from "@/data/staticData";

const getTechIcon = (tech: string) => {
  return techIcons[tech as keyof typeof techIcons];
};

const TechIcon = ({
  tech,
  className,
}: {
  tech: string;
  className?: string;
}) => {
  const Icon = getTechIcon(tech);

  return (
    <div className="relative">
      <Icon className={`${className} peer hover:scale-110 transition-all`} />
      {/* <Icon className={`${className} hover:scale-110 transition-all`} /> */}

      <div className="absolute overflow-visible hidden peer-hover:flex flex-nowrap top-10 left-0 z-10 px-3 py-2 sm:px-1 sm:py-1 text-sm sm:text-xs font-medium text-white bg-dark/70 rounded-lg shadow-sm w-fit">
        {tech}
      </div>
    </div>
  );
};

export default TechIcon;
