"use client";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BackToStart = () => {
  return (
    <button
      className="fixed right-10 bottom-10 cursor-pointer w-10 h-10 rounded-full bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black transition-colors duration-500"
      title="back to top button"
      type="button"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <FontAwesomeIcon icon={faUpLong} />
    </button>
  );
};

export default React.memo(BackToStart);
