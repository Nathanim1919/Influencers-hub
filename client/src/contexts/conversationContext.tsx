// ConversationContext.tsx
import React, { createContext, useContext, useState } from "react";
import { Influencer } from "../interfaces/influencerInterface";
import { IBrand } from "../interfaces/brandInterface";
import { conversation } from "../interfaces/conversationInterface";

// Define the type for your conversation context
interface ConversationContextType {
  activeConversation: conversation | null;
  setActiveConversation: React.Dispatch<
    React.SetStateAction<conversation | null>
  >;
}

// Create the context with a default value
const ConversationContext = createContext<ConversationContextType | undefined>(
  undefined
);
type ConversationProvidePros = {
  children: React.ReactNode;
};

// Create a provider component
export const ConversationProvider: React.FC<ConversationProvidePros> = ({
  children,
}) => {
  const [activeConversation, setActiveConversation] =
    useState<conversation | null>(null);

  return (
    <ConversationContext.Provider
      value={{ activeConversation, setActiveConversation }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

// Custom hook to use the conversation context
export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (context === undefined) {
    throw new Error(
      "useConversation must be used within a ConversationProvider"
    );
  }
  return context;
};
