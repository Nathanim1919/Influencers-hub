import React from "react";
import styled from "styled-components";
import { useAuth } from "../../../contexts/authContext";
import { IoMdArrowRoundBack } from "react-icons/io";

interface InfluencerAccountInfoProps {
  email: string;
  role: string;
  password: string;
  fullName: string;
  setFullName: (fullName: string) => void;
  location: string;
  setLocation: (location: string) => void;
  niche: string;
  setNiche: (niche: string) => void;
  setOpenPasswordModal?: (open: boolean) => void;
  setOpenInfluencerInfoModal?: (open: boolean) => void;
}

export const InfluencerAccountInfo: React.FC<InfluencerAccountInfoProps> = ({
  email,
  role,
  password,
  fullName,
  setFullName,
  location,
  setLocation,
  niche,
  setNiche,
  setOpenPasswordModal,
  setOpenInfluencerInfoModal,
}) => {
  const { register } = useAuth();

  const handleRegister = async () => {
    await register({ email, role, password, fullName, location, niche})
      .then(() => {
        console.log("Registration successful");
      })
      .catch((err) => {
        console.error("Registration failed", err);
      });
  };
  return (
    <Container>
      <div
        className="back"
        onClick={() => {
          setOpenInfluencerInfoModal?.(false);
          setOpenPasswordModal?.(true);
        }}
      >
        <IoMdArrowRoundBack />
      </div>
      <div className="form-group">
        <label htmlFor="brandName">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="form-control"
          id="brandName"
          placeholder="Enter brand name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="brandLocation">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
          id="brandLocation"
          placeholder="Enter location"
        />
      </div>
      <div className="form-group">
        <label htmlFor="brandNiche">Niche</label>
        <input
          type="text"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          className="form-control"
          id="brandNiche"
          placeholder="Enter niche"
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 4rem;

  .back {
    position: absolute;
    left: 1rem;
    top: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    background-color: #eee;
    border-radius: 50%;
  }

  .form-group {
    width: 100%;
    margin-bottom: 1rem;
  }

  label {
    font-size: 0.8rem;
    color: #333;
    font-weight: 500;
    margin-top: 0.3rem;
  }

  input {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    padding: 0.5rem;
  }

  input[type="file"] {
    height: auto;
  }
`;
