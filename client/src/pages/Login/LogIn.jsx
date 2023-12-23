import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { LabelInput } from "../../components/form/LableInput";

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // authentication logic here
      console.log('Logging in with:', email, password);
    };
  
    return (
        <div className="max-w-sm w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold">Log in</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <LabelInput 
                    lblProps={{ text: 'Email address' }}
                    inpProps={{
                        id: "email-address", 
                        type:"email", 
                        autoComplete:"email", 
                        required: true, 
                        value: email, 
                        onChange: (e)=>setEmail(e.target.value),
                        placeholder: "Email address",
                }}/>
                <LabelInput
                    lblProps={{ text: 'Password' }}
                    inpProps={{
                        id: 'password',
                        type: 'password',
                        autoComplete: 'current-password',
                        required: true,
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        placeholder: 'Password',
                }}/>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
  
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <Button type="submit">Log in</Button>
          </form>
        </div>
    );  
}