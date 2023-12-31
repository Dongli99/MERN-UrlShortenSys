import { useState } from "react";
import { UssForm } from "../../components/form/UssForm";
import { EmailInput } from "../../components/form/EmailInput";
import { FlexLine } from "../../components/ui/FlexLine";
import { Button } from "../../components/ui/Button";

export const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const handleForgotPass = (e) => {
    e.preventDefault();
    // check email matching account;
    // send email to account;
    // send back feedback;
  };

  return (
    <UssForm title="Forgot Password" onSubmit={handleForgotPass}>
      <FlexLine>Please enter your Email Address:</FlexLine>
      <EmailInput email={email} setEmail={setEmail} />
      <Button type="submit">Send Token</Button>
    </UssForm>
  );
};
