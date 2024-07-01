import React from "react";

import styled from "styled-components";
import InputField from "../../common/inputField";
import { IoMdArrowRoundBack } from "react-icons/io";

interface setPasswordModalProps {
  password: string;
  role: string;
  setPassword: (password: string) => void;
  setSelectRole: (value: boolean) => void;
  setOpenPasswordModal: (value: boolean) => void;
  setOpenBrandInfoModal?: (value: boolean) => void;
  setOpenInfluencerInfoModal?: (value: boolean) => void;
}

export const SetPasswordModal: React.FC<setPasswordModalProps> = ({
  password,
  role,
  setPassword,
  setSelectRole,
  setOpenPasswordModal,
  setOpenBrandInfoModal,
  setOpenInfluencerInfoModal,
}) => {

  return (
    <Container>
      <div
        className="back"
        onClick={() => {
          setSelectRole?.(true);
          setOpenPasswordModal?.(false);
        }}
      >
        <IoMdArrowRoundBack />
      </div>
      <h1>Set Your Password</h1>
      <div className="password">
        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={()=> {
          role === "Brand" ? setOpenBrandInfoModal?.(true) : setOpenInfluencerInfoModal?.(true);
          setOpenPasswordModal?.(false);
        }}>Set Password</button>
      </div>
    </Container>
  );
};

// styled-components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  position: absolute;
  padding: 5rem;
  box-shadow: 0 3px 26px rgba(0, 0, 0, 0.06);


  .back{
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

  .password {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    button {
      padding: 0.5rem 2rem;
      border-radius: 5px;
      border: 2px solid #fc9494;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
    }

    button:hover {
      background-color: #fc9494;
      color: white;
    }
  }
`;
