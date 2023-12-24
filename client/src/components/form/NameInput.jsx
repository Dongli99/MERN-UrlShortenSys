import { TextLineInput } from "./TextLineInput";

export const NameInput = ({ nameType, name, setName }) => {
  // Input that contains first or last name
  const placeHolderText =
    nameType === "given-name" ? "First Name" : "Last Name";

  return (
    <TextLineInput
      lblProps={{ text: nameType }}
      inpProps={{
        id: nameType,
        type: "text",
        autoComplete: nameType,
        required: true,
        value: name,
        onChange: (e) => setName(e.target.value),
        placeholder: placeHolderText,
        className: "w-48",
      }}
    />
  );
};
