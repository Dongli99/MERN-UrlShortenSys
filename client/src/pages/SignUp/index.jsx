import { useState } from "react";
import { EmailInput } from "../../components/form/EmailInput";
import { InputGroup } from "../../components/form/InputGroup";
import { PasswordInput } from "../../components/form/PasswordInput";
import { QuickLink } from "../../components/form/QuickLink";
import { UssForm } from "../../components/form/UssForm";
import { Button } from "../../components/ui/Button";
import { ConfirmPassInput } from "../../components/form/ConfirmPassInput";
import { TextWarning } from "../../components/ui/TextWarning";
import { axiosInstance } from "../../services/axios";
import { NameInput } from "../../components/form/NameInput";
import { FlexLine } from "../../components/ui/FlexLine";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passMatch, setPassMatch] = useState(true);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    handleConfirmPass();
    if (password === confirmPass) {
      try {
        await axiosInstance.post("/api/auth/register", {
          firstName,
          lastName,
          email,
          password,
        });
        alert("Account Created!");
        navigate("/login");
      } catch (err) {
        console.log("Failed to register, try again later.", err);
      }
    }
  };

  const handleConfirmPass = async () => {
    setPassMatch(password === confirmPass);
  };

  return (
    <UssForm title="Sign Up" onSubmit={registerUser} divStyle="max-w-sm">
      <InputGroup>
        <FlexLine>
          <NameInput
            nameType={"given-name"}
            name={firstName}
            setName={setFirstName}
          />
          <NameInput
            nameType={"family-name"}
            name={lastName}
            setName={setLastName}
          />
        </FlexLine>
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
