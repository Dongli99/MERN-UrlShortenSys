import { useState } from "react";
import { UssForm } from "../../components/form/UssForm";
import { EmailInput } from "../../components/form/EmailInput";
import { FlexLine } from "../../components/ui/FlexLine";
import { Button } from "../../components/ui/Button";

/**
 * ForgotPass component for password recovery.
 * @returns {JSX.Element} - Rendered ForgotPass component.
 */
export const ForgotPass = () => {
  const [email, setEmail] = useState("");

  /**
   * Function to handle password recovery process.
   * @param {Event} e - The form submit event.
   */
  const handleForgotPass = (e) => {
    e.preventDefault();
    // check email matching account;
    // send email to account;
    // send back feedback;
  };

  return (
    <UssForm
      title="Forgot Password"
      onSubmit={handleForgotPass}
      divStyle="max-w-lg"
    >
      <FlexLine>Please enter your Email Address:</FlexLine>
      <EmailInput email={email} setEmail={setEmail} />
      <Button type="submit">Send Token</Button>
    </UssForm>
  );
};
