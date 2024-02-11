/**
 * ConfirmPassInput component for forms.
 * This component represents an input field for confirming passwords in forms.
 * @module ConfirmPassInput
 * @param {object} props - The properties passed to the component.
 * @param {string} props.confirmPass - The confirmed password value.
 * @param {function} props.setConfirmPass - The function to set the confirmed password value.
 * @returns {JSX.Element} The JSX element representing the confirm password input field.
 */

import { TextLineInput } from "./TextLineInput";

export const ConfirmPassInput = ({ confirmPass, setConfirmPass }) => {
  return (
    <TextLineInput
      lblProps={{ text: "confirmPass" }}
      inpProps={{
        id: "confirmPass",
        type: "password",
        autoComplete: "none",
        required: true,
        value: confirmPass,
        onChange: (e) => setConfirmPass(e.target.value),
        placeholder: "Confirm Password",
      }}
    />
  );
};
