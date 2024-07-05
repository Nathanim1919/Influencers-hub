import React, { createContext, useContext, useState, useEffect } from "react";
import socketio from "socket.io-client";
import { SOCKET_URL } from "../config";

// Function to parse cookies and retrieve accessToken
const getCookieValue = (name: string) => {
    const nameString = name + "=";
    const value = document.cookie.split(';').find(item => item.trim().startsWith(nameString));
    if (value) {
      return value.split('=')[1];
    }
    return null;
  };
  
  // Function to establish socket connection with authorization token
  const getSocket = () => {
    const token = getCookieValue("accessToken"); // Retrieve accessToken from cookie
  
    return socketio(SOCKET_URL, {
      withCredentials: true,
      auth: { token },
    });
  };

// Create context to hold the socket instance
const SocketContext = createContext<{
  socket: ReturnType<typeof socketio> | null;
}>({
  socket: null,
});

// Customed hook to access the socket instance from the context
const useSocket = () => useContext(SocketContext);

// SocketProvider component to manage the socket instance and provide it through context
const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<ReturnType<typeof socketio> | null>(
    null
  );

  // Set up the socket connection when the component mounts
  useEffect(() => {
    setSocket(getSocket());
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketProvider, useSocket };