import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { SecondaryTitle } from "../../components/ui/SecondaryTitle";

export const MyURL = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="space-y-8">
      <SecondaryTitle title={"Dashboard in developing."}></SecondaryTitle>
      {user && (
        <div className="container w-80 overflow-scroll">
          {Object.entries(user).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
