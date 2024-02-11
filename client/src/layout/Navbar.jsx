/**
 * Navbar component for the application.
 * This component represents the navigation bar displayed at the top of the application.
 * @module Navbar
 */

import { Link } from "react-router-dom";
import Logo from "../assets/logo_titled.png";
import { TextLink } from "../components/ui/TextLink";
import { Hamburger } from "../components/ui/icons/Hamburger";
import { Avatar } from "../components/ui/icons/Avatar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { FlexLine } from "../components/ui/FlexLine";
import Cookies from "js-cookie";

/**
 * Functional component representing the navigation bar of the application.
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const active = user && !!user.firstName;

  /**
   * Handler function for signing out.
   * Clears the token cookie and updates the user context state.
   */
  const handleSignOut = () => {
    Cookies.remove("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="flex px-6 py-4 justify-between">
      {/* Logo linking to home */}
      <Link to={"/"} className="flex items-center">
        <img src={Logo} alt="URL Shorten System" className="h-8" />
      </Link>
      {/* Navigation links */}
      <div className="flex items-center gap-3 tracking-widest">
        <TextLink to={"/"}>Shorten</TextLink>
        <TextLink to={"/myurl"}>My URL</TextLink>
        <TextLink to={"/about"}>About</TextLink>
      </div>
      {/* Conditional rendering based on user authentication */}
      {active ? (
        // If user is authenticated
        <FlexLine>
          <TextLink to={"/"}>
            <Avatar />
            {user.firstName}
          </TextLink>
          <TextLink onClick={handleSignOut}>Sign Out</TextLink>
        </FlexLine>
      ) : (
        // If user is not authenticated
        <FlexLine>
          <TextLink to={"/login"}>LogIn</TextLink>
          <TextLink to={"/signup"}>SignUp</TextLink>
        </FlexLine>
      )}
    </nav>
  );
};
