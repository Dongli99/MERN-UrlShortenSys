import { OriginalUrlInput } from "./OriginalUrlInput";
import { UssForm } from "../../components/form/UssForm";
import { FlexLine } from "../../components/ui/flexLine";
import { useContext, useState } from "react";
import { AliasInput } from "./AliasInput";
import { Button } from "../../components/ui/Button";
import { Checkbox } from "../../components/form/CheckBox";
import { axiosInstance } from "../../services/axios";
import { aliasPattern } from "../../utils/validationPatterns";
import { TextWarning } from "../../components/ui/TextWarning";
import { UserContext } from "../../contexts/UserContext";

/**
 * Home component for shortening URLs.
 * @function
 * @returns {JSX.Element} - Rendered Home component.
 */
export const Home = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [aliasErr, setAliasErr] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { user } = useContext(UserContext);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAliasChange = (newAlias) => {
    setAlias(newAlias);
    if (newAlias.length >= 4 && aliasPattern.test(newAlias)) {
      setAliasErr("");
    } else {
      setAliasErr("Minimum 4 chars (letter/number/_)");
    }
  };

  const handleClickGenButton = async (e) => {
    e.preventDefault();
    if (isChecked && aliasErr !== "") {
      alert("Please input valid alias, or uncheck customize option.");
      return;
    } else {
      if (!isChecked) {
        setAlias("");
      }
      try {
        const { data } = await axiosInstance.post("/api/uss/createUrlPair", {
          userId: user?._id,
          originalUrl: originalUrl,
          alias: alias,
        });
        console.log(data.alias);
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**
   * Render the Home component.
   * @returns {JSX.Element} - Rendered Home component.
   */
  return (
    <UssForm
      title="Shorten Your URL"
      divStyle="max-w-lg"
      onSubmit={handleClickGenButton}
    >
      <OriginalUrlInput
        originalUrl={originalUrl}
        setOriginalUrl={setOriginalUrl}
      />
      <Checkbox
        id="customize-check"
        onChange={handleCheckboxChange}
        isChecked={isChecked}
      >
        Customize Your Link.
      </Checkbox>
      <FlexLine>
        <AliasInput alias={alias} setAlias={handleAliasChange} />
        <Button type="submit" fullWidth={false} className="w-1/3">
          Generate
        </Button>
      </FlexLine>
      {aliasErr !== "" && <TextWarning message={aliasErr} />}
    </UssForm>
  );
};
