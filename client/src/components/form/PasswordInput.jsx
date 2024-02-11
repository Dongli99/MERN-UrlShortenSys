/**
 * PasswordInput component for forms.
 * This component represents an input field for entering passwords.
 * @module PasswordInput
 * @param {object} props - The properties passed to the component.
 * @param {string} props.password - The value of the password input field.
 * @param {function} props.setPassword - Function to set the value of the password input field.
 * @returns {JSX.Element} The JSX element representing the password input field.
 */

import { TextLineInput } from "./TextLineInput";

export const PasswordInput = ({ password, setPassword }) => {
  return (
    <TextLineInput
      lblProps={{ text: "Password" }}
      inpProps={{
        id: "password",
        type: "password",
        autoComplete: "current-password",
        required: true,
        value: password,
        onChange: (e) => setPassword(e.target.value),
        placeholder: "Password",
      }}
    />
  );
};
