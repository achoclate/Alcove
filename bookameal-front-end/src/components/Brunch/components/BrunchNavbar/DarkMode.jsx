import React, { useState, useEffect } from "react";
import darkPng from "../../../public/images/dark-mode-button.png";
import lightPng from "../../../public/images/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative">
      {theme === "dark" ? (
        <img
          src={lightPng}
          alt="Light Mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-opacity duration-300 opacity-100 absolute right-0 z-10"
        />
      ) : (
        <img
          src={darkPng}
          alt="Dark Mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-100 absolute right-0 z-10"
        />
      )}
    </div>
  );
};

export default DarkMode;
