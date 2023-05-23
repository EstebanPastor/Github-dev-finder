"use client";
import { useEffect, useState } from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const initialThemeState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
};

function NavBar() {
  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!hasMounted) {
    return null;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="mb-10 flex items-center space-x-2">
      <h1 className="flex-grow text-4xl font-bold text-blue-950 dark:text-white">
        dev finder
      </h1>
      <span className="uppercase text-blue-950 dark:text-white">
        {theme === "light" ? "dark mode" : "light mode"}
      </span>
      <button onClick={handleTheme}>
        {theme === "light" ? (
          <MoonIcon className="full-blue-950 dark:fill-white" height={25} />
        ) : (
          <SunIcon className="full-blue-950 dark:fill-white" height={25} />
        )}
      </button>
    </header>
  );
}

export default NavBar;
