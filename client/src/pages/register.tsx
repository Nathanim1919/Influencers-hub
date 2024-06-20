import React, { useState } from "react";
import InputField from "../components/common/inputField";
import { Button } from "../components/common/button";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registration form submitted:", { email, password });
    // Add registration logic here
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-gray-900 h-full flex flex-col items-center justify-center px-10">
        <h2 className="text-gray-100 text-2xl font-semibold">Welcome to</h2>
        <h1 className="text-white font-bold text-5xl">Influencers-HUB</h1>
        <p className="text-gray-100 text-lg">
          Connect with millions of customers and grow your business. Join the
          Influencers-HUB community and unlock endless opportunities for your
          brand.
        </p>
      </div>
      <div className="w-96 mx-auto mt-20">
        <h1 className="text-2xl py-10 font-semibold text-center">
          Registration for Influencers
        </h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
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
          <Button onClick={handleSubmit}>Register</Button>
          <button className=" flex items-center justify-start gap-2 p-2 text-white w-full my-2 signwithinstagram bg-gradient-to-r from-purple-500 to-pink-500">
            <FaInstagram />
            Sign up with Instagram
          </button>
          <button className=" flex items-center justify-start gap-2 p-2 text-white w-full my-2 signupwithlinkedin bg-blue-500">
            <FaLinkedinIn />
            Sign up with LinkedIn
          </button>
          <button className="flex items-center justify-start gap-2 p-2 text-white w-full my-2 signwithgoogle bg-red-500">
            <FaGoogle />
            Sign up with Google
          </button>
          <button className=" flex items-center justify-start gap-2 p-2 text-white w-full my-2 signwithfacebook bg-blue-500">
            <FaFacebookF />
            Sign up with Facebook
          </button>
          <div>
            <p className="mt-4 text-gray-700 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
