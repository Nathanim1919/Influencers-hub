import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Influencer } from "../../../interfaces/influencerInterface";
import { conversationApi } from "../../../api";
import { useConversation } from "../../../contexts/conversationContext";
import { requestHandler } from "../../../utils";
import { IConversation } from "../../../interfaces/conversationInterface";
// Props type definition for better type checking
type ApplicationAcceptedProps = {
  influencer?: Influencer;
  setApplicationAccepted: (value: boolean) => void;
};

export const ApplicationAccepted: React.FC<ApplicationAcceptedProps> = ({
  influencer,
  setApplicationAccepted,
}) => {
  // Use navigate hook from react-router-dom
  const navigate = useNavigate();
//   const [conversations, setConversations] = useState([]);
  const {setActiveConversation } = useConversation();

  // fetch conversation
  const fetchConversation = async () => {
    if (!influencer) {
      console.error("Influencer is undefined.", influencer);
      return; // Exit the function or handle the error appropriately
    }
    await requestHandler(
      async () => await conversationApi.createNewConversation(influencer._id, influencer.role!),
      null,
      (data: IConversation) => {
        setActiveConversation(data);
        console.log("Conversations: ", data);
        navigate("messages");
      },
      alert
    );
  };

  // Function to handle messaging action
  const onMessage = async() => {
    // Your logic here
    await fetchConversation();
    //     navigate("messages");
    // });
  };

  // Function to handle go back action
  //   const onGoBack = () => {
  //     // Your logic here
  //     navigate("/influencer");
  //   };
  return (
    <ModalContainer>
      <div className="modal-content">
        <h1>Application Accepted!</h1>
        <p className="success-message">
          You've successfully accepted {influencer?.fullName}'s application. A
          new collaboration is on the horizon!
        </p>
        <p>
          Connect with {influencer?.fullName} to kickstart your partnership.
        </p>
        <div className="btns">
          <button onClick={onMessage}>Message {influencer?.fullName}</button>
          <button onClick={() => setApplicationAccepted?.(false)}>
            Cancle
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  .modal-content {
    padding: 20px;
    width: 50%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: green;
      margin-bottom: 10px;
    }

    .success-message {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }

    .btns {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;

      button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background: #3f51b5;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
