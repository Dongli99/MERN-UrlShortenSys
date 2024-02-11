import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

/**
 * LogoGroup component for rendering a group of logos with links.
 * @module LogoGroup
 * @returns {JSX.Element} The JSX element representing the LogoGroup component.
 */
function LogoGroup() {
  return (
    <div className="flex items-center space-x-4">
      <a href="https://www.linkedin.com/in/dongliliu/">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Dongli99/MERN-UrlShortenSys">
        <FaGithub />
      </a>
    </div>
  );
}

export default LogoGroup;
