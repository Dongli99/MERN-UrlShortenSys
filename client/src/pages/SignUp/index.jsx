import { useState } from "react";
import { EmailInput } from "../../components/form/EmailInput";
import { InputGroup } from "../../components/form/InputGroup";
import { PasswordInput } from "../../components/form/PasswordInput";
import { QuickLink } from "../../components/form/QuickLink";
import { UssForm } from "../../components/form/UssForm";
import { Button } from "../../components/ui/Button";
import { ConfirmPassInput } from "../../components/form/ConfirmPassInput";
import { TextWarning } from "../../components/ui/TextWarning";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passMatch, setPassMatch] = useState(true);

  const handleSignUp = (e) => {
    e.preventDefault();
    // submission logic here
    handleConfirmPass();
    console.log("Signing up with:", email, password);
  };

  const handleConfirmPass = (e) => {
    setPassMatch(password === confirmPass);
  };

  return (
    <UssForm title="Sign Up" onSubmit={handleSignUp}>
      <InputGroup>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <ConfirmPassInput
          confirmPass={confirmPass}
          setConfirmPass={setConfirmPass}
        />
        {!passMatch && <TextWarning message="Passwords do not match!" />}
      </InputGroup>
      <QuickLink to={"/login"} text={"Already a member?"} />
      <Button type="submit">Create Account</Button>
    </UssForm>
  );
};
