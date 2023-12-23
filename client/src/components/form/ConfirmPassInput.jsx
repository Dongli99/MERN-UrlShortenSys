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
