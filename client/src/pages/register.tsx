import React, { useState } from "react";
import InputField from "../components/common/inputField";
import { RegisterPageContainer } from "../assets/styledComponents/registerPageStyle";
import { RoleSelector } from "../components/modals/registrationModals/roleSelector";
import { SetPasswordModal } from "../components/modals/registrationModals/passwordModal";
import { BrandAccountInfo } from "../components/modals/registrationModals/brandAccountInfo";
import { InfluencerAccountInfo } from "../components/modals/registrationModals/InfluencerAccountInfo";
// import { useAuth } from "../contexts/authContext";

const RegistrationForm: React.FC = () => {
  // states for managing form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [brandName, setBrandName] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [niche, setNiche] = useState("");

  // states for managing modals
  const [selectRole, setSelectRole] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [openBrandInfoModal, setOpenBrandInfoModal] = useState(false);
  const [openInfluencerInfoModal, setOpenInfluencerInfoModal] = useState(false);
  // const { register } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <RegisterPageContainer>
      {selectRole && (
        <RoleSelector
          setRole={setRole}
          setOpenPasswordModal={setOpenPasswordModal}
          setSelectRole={setSelectRole}
        />
      )}
      {openPasswordModal && (
        <SetPasswordModal
          setOpenBrandInfoModal={setOpenBrandInfoModal}
          setOpenInfluencerInfoModal={setOpenInfluencerInfoModal}
          role={role}
          setSelectRole={setSelectRole}
          setOpenPasswordModal={setOpenPasswordModal}
          password={password}
          setPassword={setPassword}
        />
      )}
      {openBrandInfoModal && (
        <BrandAccountInfo
          email={email}
          role={role}
          password={password}
          brandName={brandName}
          setBrandName={setBrandName}
          location={location}
          setLocation={setLocation}
          niche={niche}
          setNiche={setNiche}
          setOpenPasswordModal={setOpenPasswordModal}
          setOpenBrandInfoModal={setOpenBrandInfoModal}
        />
      )}
      {openInfluencerInfoModal && (
        <InfluencerAccountInfo
          email={email}
          role={role}
          password={password}
          fullName={fullName}
          setFullName={setFullName}
          location={location}
          setLocation={setLocation}
          niche={niche}
          setNiche={setNiche}
          setOpenInfluencerInfoModal={setOpenInfluencerInfoModal}
          setOpenPasswordModal={setOpenPasswordModal}
        />
      )}
      {!selectRole &&
        !openBrandInfoModal &&
        !openInfluencerInfoModal &&
        !openPasswordModal && (
          <div>
            <h1>Influencers-HUB</h1>
            <form>
              <InputField
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="button" onClick={() => setSelectRole(true)}>
                Next
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
        )}
    </RegisterPageContainer>
  );
};

export default RegistrationForm;
