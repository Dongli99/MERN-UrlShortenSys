import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function LogoGroup() {
  return (
    <div className="flex items-center space-x-4">
      <a href="https://www.linkedin.com/in/dongliliu/">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Dongli99">
        <FaGithub />
      </a>
    </div>
  );
}

export default LogoGroup;
