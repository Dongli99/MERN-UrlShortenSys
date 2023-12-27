import { OriginalUrlInput } from "./OriginalUrlInput";
import { UssForm } from "../../components/form/UssForm";
import { FlexLine } from "../../components/ui/flexLine";
import { useState } from "react";
import { AliasInput } from "./AliasInput";
import { Button } from "../../components/ui/Button";

export const Home = () => {
  const [originalUrl, setOriginalUrl] = useState(null);
  const [alias, setAlias] = useState(null);

  return (
    <UssForm title="Shorten Your URL">
      <OriginalUrlInput
        originalUrl={originalUrl}
        setOriginalUrl={setOriginalUrl}
      />
      <FlexLine>Customize Your Link.</FlexLine>
      <FlexLine>
        <AliasInput alias={alias} setAlias={setAlias} />
        <Button type="submit" fullWidth={false} className="w-auto">
          Generate
        </Button>
      </FlexLine>
    </UssForm>
  );
};
