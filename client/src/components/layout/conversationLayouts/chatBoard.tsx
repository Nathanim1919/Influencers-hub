import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import InstagramImage from "../../../assets/influencerProfileImages/a.jpeg";
import ProfileImage from "../../../assets/influencerProfileImages/a.jpeg";
import { useState } from "react";
import { conversation } from "../../../interfaces/conversationInterface";
import { IMessage } from "../../../interfaces/messageInterface";
import { useAuth } from "../../../contexts/authContext";

interface ChatBoardProps {
  activeConversation: conversation | null;
}

export const ChatBoard: React.FC<ChatBoardProps> = ({ activeConversation }) => {
  const [message, setMessage] = useState<string>("");
  const {user} = useAuth();
  console.log("Active conversation: ", activeConversation);

  return (
    <div className="conversationBody">
      <div className="activeBuddy">
        <div>
          <div className="image">
            <img src={ProfileImage} alt="profileImage" />
          </div>
          <Link to="/influencer" className="buddyInfo">
            <h2>
              {activeConversation?.participants?.[0]?.fullName || "Unknown"}
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
          <div className={message.sender === user?._id? "message buddyB":"message buddyA"}>
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>
                 {message.text}
                </p>
                <span>{(message.createdAt).toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="inputform">
        <input type="text" placeholder="Write message..." />
        <button>Send</button>
      </div>
    </div>
  );
};
