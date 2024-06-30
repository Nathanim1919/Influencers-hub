import React, { useState } from "react";
import InputField from "../components/common/inputField";
import { RegisterPageContainer } from "../assets/styledComponents/registerPageStyle";
import { RoleSelector } from "../components/modals/registrationModals/roleSelector";
import { SetPasswordModal } from "../components/modals/registrationModals/passwordModal";
// import { useAuth } from "../contexts/authContext";

const RegistrationForm: React.FC = () => {
  // states for managing form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [brandName, setBrandName] = useState("");
  const [role, setRole] = useState("");

  // states for managing modals
  const [selectRole, setSelectRole] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  // const { register } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  // const handleSubmit = async () => {
  //   await register({ email, password, brandName })
  //     .then((res) => {
  //       console.log("Registration successful");
  //     })
  //     .catch((err) => {
  //       console.error("Registration failed", err);
  //     });
  // };

  // handlers

  return (
    <RegisterPageContainer>
      {selectRole && (
        <RoleSelector
          setRole={setRole}
          setOpenPasswordModal={setOpenPasswordModal}
          setSelectRole={setSelectRole}
        />
      )}
      {openPasswordModal && <SetPasswordModal password={password} setPassword={setPassword} />}
      <h1>Influencers-HUB</h1>
      <div>
        <form>
          <InputField
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="button" onClick={() => setSelectRole(true)}>
            next
          </button>
          <div>
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-blue-500">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </RegisterPageContainer>
  );
};

export default RegistrationForm;
