/**
 * Layout component for the application.
 * This component provides a consistent layout structure for the application, including a navbar, content area, and footer.
 * @module Layout
 */

import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

/**
 * Functional component representing the layout of the application.
 * @returns {JSX.Element} The JSX element representing the layout.
 */
export const Layout = () => {
  return (
    <>
      <div className="text-primary font-mono flex flex-col min-h-screen">
        {/* Render the Navbar component */}
        <Navbar />
        {/* Main content area with the Outlet component */}
        <div className="flex items-center grow justify-around py-12 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
        {/* Render the Footer component */}
        <Footer />
      </div>
    </>
  );
};
