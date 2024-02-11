import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { SecondaryTitle } from "../../components/ui/SecondaryTitle";

/**
 * MyURL component for displaying the dashboard of URLs.
 * @returns {JSX.Element} - Rendered MyURL component.
 */
export const MyURL = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="space-y-8">
      <SecondaryTitle title={"Dashboard in developing."}></SecondaryTitle>
      {user && (
        <div className="container w-80 overflow-scroll">
          {Object.entries(user).map(([key, value]) => (
            // a placeholder need to be replaced
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
