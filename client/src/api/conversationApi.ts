import apiClient from "./apiClient";

// This function creates a new conversation with the given influencerId
const createNewConversation = async (influencerId: string) => {
  return await apiClient.post("/conversation/create", { influencerId });
};

// This function gets all the conversations
const getConversations = async () => {
  return await apiClient.get("/conversations");
};

// This function gets the conversation with the given conversationId
const getConversation = async (conversationId: string) => {
  return await apiClient.get(`/conversation/${conversationId}`);
};

// This function sends a message to the conversation with the given conversationId
const sendMessage = async (conversationId: string, message: string) => {
  return await apiClient.post(`/conversation/${conversationId}/message`, {
    message,
  });
};

// export the functions
export {
  createNewConversation,
  getConversations,
  getConversation,
  sendMessage,
};
