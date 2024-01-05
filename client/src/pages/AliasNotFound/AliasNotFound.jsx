import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export const AliasNotFound = () => {
  return (
    <div className="space-y-8">
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
