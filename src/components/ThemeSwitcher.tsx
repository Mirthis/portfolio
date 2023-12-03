"use client";

import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "./Icons";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-5 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
    >
      <SunIcon className="fill-dark block dark:hidden w-7 h-7" />
      <MoonIcon className="fill-dark hidden dark:block w-7 h-7" />
    </button>
  );
};

export default ThemeSwitcher;
