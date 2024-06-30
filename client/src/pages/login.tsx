import React, { useState } from "react";
import InputField from "../components/common/inputField";
import { Button } from "../components/common/button";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
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
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-gradient-to-br from-blue-800 to-blue-300 h-full flex flex-col items-center justify-center px-10">
        <h2 className="text-gray-100 text-2xl font-semibold">
          Welcome Back to
        </h2>
        <h1 className="text-white font-bold text-5xl">Influencers-HUB</h1>
        <p className="text-gray-100 text-lg">
          Connect with millions of customers and grow your business. Join the
          Influencers-HUB community and unlock endless opportunities for your
          brand.
        </p>
      </div>
      <div className="w-96 mx-auto mt-20">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="">
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email or username"
            value={email}
            onChange={handleEmailChange}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700 text-sm">Remember me</span>
            </label>
          </div>
          <Button type="submit" onClick={() => {}}>
            Sign in
          </Button>
          <button className=" flex items-center justify-start gap-2 p-2 text-white w-full my-2 signwithinstagram bg-gradient-to-r from-purple-500 to-pink-500">
            <FaInstagram />
            Sign In with Instagram
          </button>
          <button className=" flex items-center justify-start gap-2 p-2 text-white w-full my-2 signupwithlinkedin bg-blue-500">
            <FaLinkedinIn />
            Sign In with LinkedIn
          </button>
          <button className="flex items-center justify-start gap-2 p-2 text-white w-full my-2 signwithgoogle bg-red-500">
            <FaGoogle />
            Sign In with Google
          </button>
          <button className=" flex items-center justify-start gap-2 p-2 text-white w-full my-2 signwithfacebook bg-blue-500">
            <FaFacebookF />
            Sign In with Facebook
          </button>
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
