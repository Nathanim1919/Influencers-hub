import apiClient from "./apiClient";

// This function creates a new conversation with the given influencerId
const createNewConversation = async (participantId: string,
  participantRole: string,) => {
  return await apiClient.post("/conversation/create", { participantId, participantRole });
};

// This function gets all the conversations
const getConversations = async () => {
  return await apiClient.get("/conversation");
};

// This function gets the conversation with the given conversationId
const getConversation = async (conversationId: string) => {
  return await apiClient.get(`/conversation/${conversationId}`);
};

// This function sends a message to the conversation with the given conversationId
const sendMessage = async (conversationId: string, message: string) => {
  return await apiClient.post(`/conversation/sendMessage`, {
    message,
    conversationId
  });
};

// export the functions
export {
  createNewConversation,
  getConversations,
  getConversation,
  sendMessage,
};
