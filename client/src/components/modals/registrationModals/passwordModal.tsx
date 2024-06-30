import React from "react";

import styled from "styled-components";
import InputField from "../../common/inputField";

interface setPasswordModalProps {
  password: string;
  setPassword: (password: string) => void;
}

export const SetPasswordModal: React.FC<setPasswordModalProps> = ({
    password,
  setPassword,
}) => {
  return (
    <Container>
      <h1>Set Your Password</h1>
      <div className="password">
       <InputField
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
       />
        <button>Set Password</button>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem;
  box-shadow: 0 3px 26px rgba(0, 0, 0, 0.06);

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
