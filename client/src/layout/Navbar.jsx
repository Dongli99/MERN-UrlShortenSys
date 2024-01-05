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
        <img src={Logo} alt="URL Shorten System" className="h-8" />
      </Link>
      <div className="flex items-center gap-3 tracking-widest">
        <TextLink to={"/"}>Shorten</TextLink>
        <TextLink to={"/myurl"}>My URL</TextLink>
        <TextLink to={"/about"}>About</TextLink>
      </div>
      {active ? (
        <FlexLine>
          <TextLink to={"/"}>
            <Avatar />
            {user.firstName}
          </TextLink>
          <TextLink onClick={handleSignOut}>Sign Out</TextLink>
        </FlexLine>
      ) : (
        <FlexLine>
          <TextLink to={"/login"}>LogIn</TextLink>
          <TextLink to={"/signup"}>SignUp</TextLink>
        </FlexLine>
      )}
    </nav>
  );
};
