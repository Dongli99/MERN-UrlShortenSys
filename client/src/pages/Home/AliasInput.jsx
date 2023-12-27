import { TextLineInput } from "../../components/form/TextLineInput";

export const AliasInput = ({ alias, setAlias }) => {
  return (
    <TextLineInput
      lblProps={{ text: "Alias" }}
      fullWidth={false}
      inpProps={{
        id: "alias",
        type: "text",
        value: alias,
        onChange: (e) => setAlias(e.target.value),
        placeholder: "at least 4 chars",
        className: "w-64",
      }}
    />
  );
};
