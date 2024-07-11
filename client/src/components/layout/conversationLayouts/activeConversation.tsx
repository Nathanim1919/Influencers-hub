import ProfileImage from "../../../assets/influencerProfileImages/a.jpeg";
import { useAuth } from "../../../contexts/authContext";
import { IConversation } from "../../../interfaces/conversationInterface";

interface ActiveConversationProps {
  activeConversation: IConversation | null;
  setActiveConversation: React.Dispatch<
    React.SetStateAction<IConversation | null>
  >;
  conversations: IConversation[];
}

export const ActiveConversation: React.FC<ActiveConversationProps> = ({
  activeConversation,
  setActiveConversation,
  conversations,
}) => {
  const { user } = useAuth();
  console.log("Active conversation: ", activeConversation);
  return (
    <div className="activeConversations">
      <h1>Active conversations</h1>
      <div className="actives">
        {conversations.map((conversation) => (
          <div
            className={(activeConversation?._id === conversation._id)?"conversation activeConversation":"conversation"}
            onClick={() => setActiveConversation(conversation)}
          >
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              {/* Example approach, adjust based on actual data structure */}
              <h2>
                {conversation.participants?.find(
                  (p) => p.participantId._id !== user?._id
                )?.participantId.fullName ||
                  conversation.participants?.find(
                    (p) => p.participantId._id !== user?._id
                  )?.participantId.brandName ||
                  "Unknown"}
              </h2>
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
