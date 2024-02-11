/**
 * Footer component for the application.
 * This component represents the footer displayed at the bottom of the application.
 * @module Footer
 */

import LogoGroup from "../components/ui/icons/LogoGroup";

/**
 * Functional component representing the footer of the application.
 * @returns {JSX.Element} The JSX element representing the footer.
 */
export const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Copyright information */}
        <div>
          <p className="text-sm">
            &copy; 2023 Dongli Liu. All rights reserved.
          </p>
        </div>
        {/* Logo group */}
        <div className="flex items-center space-x-4">
          <LogoGroup />
        </div>
      </div>
    </footer>
  );
};
