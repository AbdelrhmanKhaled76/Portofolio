import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-24 w-screen shadow-2xl dark:shadow-white bg-white dark:bg-black flex justify-center items-center">
      <div className="flex justify-between items-center gap-10">
        <a
          rel="noopener"
          title="github link"
          href="https://github.com/AbdelrhmanKhaled76"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="text-3xl" />
        </a>
        <a
          rel="noopener"
          title="linked in link"
          href="https://www.linkedin.com/in/abdelrhmankhaledmohamed76/"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
