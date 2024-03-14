"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const CustomMobileLink = ({
  href,
  title,
  className = "",
  setMenuOpen,
}: {
  href: string;
  title: string;
  className?: string;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(href, { scroll: false });
    setMenuOpen(false);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative group text-dark dark:text-light ${className}`}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0  dark:bg-light bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomMobileLink;
