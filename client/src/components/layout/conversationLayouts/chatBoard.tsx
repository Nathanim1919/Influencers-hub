import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import InstagramImage from "../../../assets/influencerProfileImages/a.jpeg";
import ProfileImage from "../../../assets/influencerProfileImages/a.jpeg";
import { useEffect, useState } from "react";
import { IConversation } from "../../../interfaces/conversationInterface";
import { IMessage } from "../../../interfaces/messageInterface";
import { useAuth } from "../../../contexts/authContext";
import { requestHandler } from "../../../utils";
import { conversationApi } from "../../../api";
import io from "socket.io-client";

interface ChatBoardProps {
  activeConversation: IConversation | null;
  setActiveConversation: (conversation: IConversation) => void;
}

export const ChatBoard: React.FC<ChatBoardProps> = ({
  activeConversation,
  setActiveConversation,
}) => {
  const [message, setMessage] = useState<string>("");
  const { user } = useAuth();
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    // Listen for new messages
    newSocket.on("message", (newMessage: IMessage) => {
      console.log("New message: ", newMessage);
      if (activeConversation) {
        setActiveConversation((prev: IConversation) => {
          return {
            ...prev,
            messages: [...prev.messages, newMessage],
          };
        });
      }
    });

    return () => {
      newSocket.close();
    };
  }, [activeConversation]);

  const sendMessage = async () => {
    if (activeConversation?._id) {
      await requestHandler(
        async () =>
          await conversationApi.sendMessage(activeConversation._id, message),
        null,
        (data) => {
          console.log("Message sent: ", data);
          setMessage("");
        },
        alert
      );
    } else {
      console.error("Active conversation ID is undefined.");
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
        {!activeConversation && (
          <div className="emptyConversation">
            <h2>Select aconversation to begin with.</h2>
          </div>
        )}
        {activeConversation?.messages.length === 0 && (
          <div className="emptyMessage">
            <h2>Start with Hey.</h2>
          </div>
        )}
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
                {/* <span>{message.createdAt.toLocaleString()}</span> */}
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
