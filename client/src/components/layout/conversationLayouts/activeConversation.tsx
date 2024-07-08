import ProfileImage from "../../../assets/influencerProfileImages/a.jpeg";
import { conversation } from "../../../interfaces/conversationInterface";

interface ActiveConversationProps {
  activeConversation: conversation | null;
  setActiveConversation: React.Dispatch<
    React.SetStateAction<conversation | null>
  >;
  conversations: conversation[];
}

export const ActiveConversation: React.FC<ActiveConversationProps> = ({
  activeConversation,
  setActiveConversation,
  conversations,
}) => {
  return (
    <div className="activeConversations">
      <h1>Active conversations</h1>
      <div className="actives">
        {conversations.map((conversation) => (
          <div
            className="conversation"
            onClick={() => setActiveConversation(conversation)}
          >
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              {/* Example approach, adjust based on actual data structure */}
              <h2>{conversation.participants?.[0]?.fullName || conversation.participants?.[0]?.brandName || "Unknown"}</h2>
              <p>
                {conversation.messages.find((m) => m.isLast)?.text ||
                  "No messages"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
