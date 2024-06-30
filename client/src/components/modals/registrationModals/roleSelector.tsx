import React from "react";
import styled from "styled-components";

interface RoleSelectorProps {
  setRole: (role: string) => void;
  setOpenPasswordModal?: (open: boolean) => void;
  setSelectRole?: (select: boolean) => void;
}
export const RoleSelector: React.FC<RoleSelectorProps> = ({
  setRole,
  setOpenPasswordModal,
  setSelectRole
}) => {
  return (
    <Container>
      <h1>Select Your Professional Role</h1>
      <div className="roles">
        <button
          onClick={() => {
            setRole("influencer");
            setOpenPasswordModal?.(true);
            setSelectRole?.(false);
          }}
        >
          Register as an Influencer
        </button>
        <button
          onClick={() => {
            setRole("brand");
            setOpenPasswordModal?.(true);
            setSelectRole?.(false);
          }}
        >
          Register as a Brand
        </button>
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

  .roles {
    display: flex;
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
