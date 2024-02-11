/**
 * NameInput component for forms.
 * This component represents an input field for entering first or last name.
 * @module NameInput
 * @param {object} props - The properties passed to the component.
 * @param {string} props.nameType - The type of name input ("given-name" for first name, "family-name" for last name).
 * @param {string} props.name - The value of the name input field.
 * @param {function} props.setName - Function to set the value of the name input field.
 * @returns {JSX.Element} The JSX element representing the name input field.
 */

import { TextLineInput } from "./TextLineInput";

export const NameInput = ({ nameType, name, setName }) => {
  // Input that contains first or last name
  const placeHolderText =
    nameType === "given-name" ? "First Name" : "Last Name";

  return (
    <TextLineInput
      lblProps={{ text: nameType }}
      fullWidth={false}
      inpProps={{
        id: nameType,
        type: "text",
        autoComplete: nameType,
        required: true,
        value: name,
        onChange: (e) => setName(e.target.value),
        placeholder: placeHolderText,
        className: "w-full",
      }}
    />
  );
};
