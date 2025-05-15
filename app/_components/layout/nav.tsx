"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faMoon,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
const Nav = () => {
  const Button = dynamic(() => import("../ui/button"), {
    ssr: false,
  });
  const [isDark, setIsDark] = useState(false);
  const [openSideNav, setOpenSideNav] = useState<boolean>(false);
  // Detect theme on mount
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = (): void => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className="container mx-auto grid grid-cols-2">
      <figure>
        <Image
          src={!isDark ? "/icons/logo-light.png" : "/icons/logo-dark.png"}
          alt="logo"
          width={100}
          height={100}
          loading="lazy"
        />
      </figure>

      <nav className="ms-auto flex justify-between items-center py-5 px-3">
        <div className="md:flex justify-between items-center gap-4 hidden">
          <Button href="#basics-i-know" isDark={true} value={"Basics"} />
          <Button href="#experience" isDark={true} value={"Experience"} />
          <Button href="#other-skills" isDark={false} value={"skills"} />
          <button
            title="dark mood"
            type="button"
            className="cursor-pointer w-10 h-10 rounded-full bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black transition-colors duration-500"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </div>
        <button
          onClick={() => {
            setOpenSideNav(true);
          }}
          className="block md:hidden cursor-pointer"
          type="button"
          title="side nav"
        >
          <FontAwesomeIcon icon={faEllipsis} className="text-2xl" />
        </button>
      </nav>

      {/* Always mounted, just animated */}
      <aside
        className={`dark:bg-black fixed top-0 right-0 w-48 h-screen z-50 bg-white shadow dark:shadow-white transition-transform duration-500 transform md:hidden ${
          openSideNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          title="close side bar"
          type="button"
          onClick={() => {
            setOpenSideNav(false);
          }}
          className="cursor-pointer text-2xl absolute top-4 right-4 hover:text-red-500 transition-colors duration-500"
        >
          <FontAwesomeIcon icon={faSquareXmark} />
        </button>
        <div className="flex justify-between flex-col mt-15 px-3 w-full text-center  gap-4">
          <Button href="#about-me" isDark={true} value={"About me"} />
          <Button href="#experience" isDark={true} value={"Experience"} />
          <Button href="#other-skills" isDark={false} value={"skills"} />
          <button
            title="dark mood"
            type="button"
            className="cursor-pointer w-10 h-10 rounded-full mx-auto bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black transition-colors duration-500"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Nav;
