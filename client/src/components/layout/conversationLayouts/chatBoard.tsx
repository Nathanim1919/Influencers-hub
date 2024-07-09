import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import InstagramImage from "../../../assets/influencerProfileImages/a.jpeg";
import ProfileImage from "../../../assets/influencerProfileImages/a.jpeg";
import { useState } from "react";
import { IConversation } from "../../../interfaces/conversationInterface";
import { IMessage } from "../../../interfaces/messageInterface";
import { useAuth } from "../../../contexts/authContext";
import { requestHandler } from "../../../utils";
import { conversationApi } from "../../../api";

interface ChatBoardProps {
  activeConversation: IConversation | null;
}

export const ChatBoard: React.FC<ChatBoardProps> = ({ activeConversation }) => {
  const [message, setMessage] = useState<string>("");
  const { user } = useAuth();

  const sendMessage = async () => {
    if (activeConversation?._id) { // Ensure _id is defined
      await requestHandler(
        async () => await conversationApi.sendMessage(activeConversation._id, message),
        null,
        (data) => {
          console.log("Message sent: ", data);
        },
        alert
      );
    } else {
      console.error("Active conversation ID is undefined.");
      // Optionally, handle the case when the conversation ID is undefined
    }
  };

  return (
    <div className="conversationBody">
      <div className="activeBuddy">
        <div>
          <div className="image">
            <img src={ProfileImage} alt="profileImage" />
          </div>
          <Link to="/influencer" className="buddyInfo">
            <h2>
              {activeConversation?.participants?.find(
                (p) => p.participantId._id !== user?._id
              )?.participantId.fullName ||
                activeConversation?.participants?.find(
                  (p) => p.participantId._id !== user?._id
                )?.participantId.brandName ||
                "Unknown"}
            </h2>
            <p>online</p>
          </Link>
        </div>
        <div className="options">
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="conversationBody">
        {activeConversation?.messages.map((message: IMessage) => (
          <div
            className={
              message.sender === user?._id ? "message buddyB" : "message buddyA"
            }
          >
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>{message.text}</p>
                <span>{message.createdAt.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="inputform">
        <input
          type="text"
          onChange={(e) => setMessage((e.target as HTMLInputElement).value)}
          placeholder="Write message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
