/**
 * EmailInput component for forms.
 * This component represents an input field for email addresses in forms.
 * @module EmailInput
 * @param {object} props - The properties passed to the component.
 * @param {string} props.email - The email address value.
 * @param {function} props.setEmail - The function to set the email address value.
 * @returns {JSX.Element} The JSX element representing the email address input field.
 */

import { TextLineInput } from "./TextLineInput";

export const EmailInput = ({ email, setEmail }) => {
  return (
    <TextLineInput
      lblProps={{ text: "Email address" }}
      inpProps={{
        id: "email-address",
        type: "email",
        autoComplete: "email",
        required: true,
        value: email,
        onChange: (e) => setEmail(e.target.value),
        placeholder: "Email address",
      }}
    />
  );
};
