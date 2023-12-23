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
