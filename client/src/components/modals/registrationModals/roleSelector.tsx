import React from "react";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

interface RoleSelectorProps {
  setRole: (role: string) => void;
  setOpenPasswordModal?: (open: boolean) => void;
  setSelectRole?: (select: boolean) => void;
}
export const RoleSelector: React.FC<RoleSelectorProps> = ({
  setRole,
  setOpenPasswordModal,
  setSelectRole,
}) => {

  return (
    <Container>
      <div
        className="back"
        onClick={() => {
          setSelectRole?.(false);
        }}
      >
        <IoMdArrowRoundBack />
      </div>
      <h1>Select Your Professional Role</h1>
      <div className="roles">
        <button
          onClick={() => {
            setRole("Influencer");
            setOpenPasswordModal?.(true);
            setSelectRole?.(false);
          }}
        >
          Register as an Influencer
        </button>
        <button
          onClick={() => {
            setRole("Brand");
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
  background-color: #fff;
  position: absolute;
  padding: 5rem;
  box-shadow: 0 3px 26px rgba(0, 0, 0, 0.06);

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

  .roles {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    button {
      padding: 0.5rem 2rem;
      border-radius: 5px;
      border: 1px solid #eee;
      box-shadow: none;
      cursor: pointer;
      font-family: inherit;
    }

    button:hover {
      border: 1px solid #dd4c4c;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    }
  }
`;
