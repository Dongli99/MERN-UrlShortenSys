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
