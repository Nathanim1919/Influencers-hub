import { RecentPostsContainer } from "../assets/styledComponents/messageComponent";
import { ActiveConversation } from "../components/layout/conversationLayouts/activeConversation";
import { ChatBoard } from "../components/layout/conversationLayouts/chatBoard";
import { ActiveUserInfo } from "../components/layout/conversationLayouts/activeUserInfo";
import { useConversation } from "../contexts/conversationContext";
import { requestHandler } from "../utils";
import { conversationApi } from "../api";
import { useEffect, useState } from "react";


export const Message: React.FC = () => {
  const { activeConversation, setActiveConversation } = useConversation();
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  

  // fetch conversation
  const fetchConversation = async () => {
    await requestHandler(
      async () => await conversationApi.getConversations(),
      () => {},
      (data) => {
        setConversations(data );
        console.log("Conversations: ", data);
      },
      alert
    );
  };

  

  useEffect(() => {
    fetchConversation();
  }, []);

  return (
    <RecentPostsContainer>
      <ActiveConversation
        activeConversation={activeConversation}
        conversations={conversations}
        setActiveConversation={setActiveConversation}
      />
      <ChatBoard setActiveConversation={setActiveConversation} activeConversation={activeConversation} />
      {activeConversation && <ActiveUserInfo activeConversation={activeConversation} />}
    </RecentPostsContainer>
  );
};
