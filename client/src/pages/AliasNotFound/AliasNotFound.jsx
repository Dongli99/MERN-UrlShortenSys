import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import ErrorImage from "../../assets/error_img.jpg";

/**
 * AliasNotFound component to display when a shortened URL is not found.
 * @returns {JSX.Element} - Rendered AliasNotFound component.
 */
export const AliasNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <img src={ErrorImage} alt="error image" className="h-40" />
      <div>
        <p>Oops! The shortened disappears.</p>
        <p>It is either not generated, or expired.</p>
      </div>
      <div>
        <Link to={"/"}>
          <Button>Create one.</Button>
        </Link>
      </div>
    </div>
  );
};
