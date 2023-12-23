import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { QuickLink } from "../../components/form/QuickLink";
import { InputGroup } from "../../components/form/InputGroup";
import { UssForm } from "../../components/form/UssForm";
import { PasswordInput } from "../../components/form/PasswordInput";
import { EmailInput } from "../../components/form/EmailInput";
import { FlexLine } from "../../components/ui/flexLine";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // authentication logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <UssForm title="Log In" onSubmit={handleLogin}>
      <input type="hidden" name="remember" value="true" />
      <InputGroup>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
      </InputGroup>
      <FlexLine>
        <QuickLink to="/signup" text="New user?" />
        <QuickLink to="/forgotpass" text="Forgot password?" />
      </FlexLine>
      <Button type="submit">Log in</Button>
    </UssForm>
  );
};
