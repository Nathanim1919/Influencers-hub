import React, { useState } from "react";
import InputField from "../components/common/inputField";
import { Button } from "../components/common/button";
import { useAuth } from "../contexts/authContext";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({ email, password })
      .then((res) => {
        console.log("Login successful");
      })
      .catch((err) => {
        console.error("Login failed", err);
      });
  };

  return (
    <div className="grid grid-cols-2 h-screen items-center content-center">
      <div className="w-96 mx-auto mt-20">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="">
          <InputField
            // label="Email"
            type="email"
            placeholder="Enter your email or username"
            value={email}
            onChange={handleEmailChange}
          />
          <InputField
            // label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" onClick={() => {}}>
            Sign in
          </Button>
          <div>
            <p className="mt-4 text-gray-700 text-sm">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
