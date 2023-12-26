import { Link } from "react-router-dom";
import Logo from "../assets/logo_titled.png";
import { TextLink } from "../components/ui/TextLink";
import { Hamburger } from "../components/ui/icons/Hamburger";
import { Avatar } from "../components/ui/icons/Avatar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { FlexLine } from "../components/ui/flexLine";
import Cookies from "js-cookie";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const active = user && !!user.firstName;
  const handleSignOut = () => {
    Cookies.remove("token");
    setUser(null);
    navigate("/login");
  };

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
      </Link>
      {active && (
        <FlexLine>
          <TextLink to={"/"}>
            <Avatar />
            {user.firstName}
          </TextLink>
          <TextLink onClick={handleSignOut}>Sign Out</TextLink>
        </FlexLine>
      )}
    </nav>
  );
};
