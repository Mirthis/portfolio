import { techIcons } from "@/data/staticData";

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
    <div className="relative flex gap-x-2">
      <Icon className={`${className} peer hover:scale-110 transition-all`} />
      {/* <Icon className={`${className} hover:scale-110 transition-all`} /> */}

      {showLabel ? (
        <div className="whitespace-nowrap font-semibold mr-4">{tech}</div>
      ) : (
        <div className="absolute overflow-visible hidden peer-hover:flex flex-nowrap top-10 left-0 z-10 px-3 py-2 sm:px-1 sm:py-1 text-sm sm:text-xs font-medium text-white bg-dark/70 rounded-lg shadow-sm w-fit">
          {tech}
        </div>
      )}
    </div>
  );
};

export default TechIcon;
