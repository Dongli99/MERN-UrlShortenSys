import { useContext, useState } from "react";
import { Button } from "../../components/ui/Button";
import { QuickLink } from "../../components/form/QuickLink";
import { InputGroup } from "../../components/form/InputGroup";
import { UssForm } from "../../components/form/UssForm";
import { PasswordInput } from "../../components/form/PasswordInput";
import { EmailInput } from "../../components/form/EmailInput";
import { FlexLine } from "../../components/ui/FlexLine";
import { axiosInstance } from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../../utils/fetchProfile";
import { UserContext } from "../../contexts/UserContext";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/api/auth/login", { email, password });
      alert("Log in successful.");
      fetchProfile(setUser);
      navigate("/");
    } catch (err) {
      alert("Log in failed", err);
    }
  };

  return (
    <UssForm title="Log In" onSubmit={handleLogin} divStyle="max-w-sm">
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
