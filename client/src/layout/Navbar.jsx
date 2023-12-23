import { Link } from "react-router-dom";
import Logo from "../assets/logo_titled.png";
import { TextLink } from "../components/ui/TextLink";
import { Hamburger } from "../components/ui/icons/Hamburger";
import { Avatar } from "../components/ui/icons/Avatar";

export const Navbar = () => {
  return (
    <nav className="flex px-6 py-4 justify-between">
      <Link to={"/"} className="flex items-center">
        <img src={Logo} alt="URL Shorten System" className="h-10" />
      </Link>
      <div className="flex items-center text-1.5xl gap-3 tracking-widest">
        <TextLink to={"/"}>Shorten</TextLink>
        <TextLink to={"/myurl"}>My URL</TextLink>
        <TextLink to={"/about"}>About</TextLink>
      </div>
      <Link
        to={"/login"}
        className="flex items-center text-xl gap-3 font-light"
      >
        <Hamburger />
        <Avatar />
        {/* <Link to={'/login'}>Log In</Link>
                <div>/</div>
                <Link to={'/signup'}>Sign Up</Link> */}
      </Link>
    </nav>
  );
};
