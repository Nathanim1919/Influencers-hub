import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/userInterface";

import { IAuthContext } from "../interfaces/authContextInterface";
import { requestHandler } from "../utils";
import { authApi } from "../api";

const AuthContext = createContext<IAuthContext>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
});

// create a hook to use the AuthContext
const useAuth = () => useContext(AuthContext);

// AuthProvider Component
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (user: IUser) => {
    await requestHandler(
      async () => await authApi.login(user),
      setLoading,
      (data) => {
         // console.log("User role is: ", date?.role);
          setUser(data as IUser);
        if (data?.role) {
            navigate(`/${data?.role}`);
        } else {
            navigate("/")
        }
      },
      () => {
          navigate('/login');
      }
    );
  };

  const register = async (user: IUser) => {
    await requestHandler(
      async () => await authApi.register(user),
      setLoading,
      (data: IUser) => {
        setUser(data);
        if (data?.role) {
            navigate(`/${user?.role}`);
        } else {
            navigate("/")
        }
      },
      alert
    );
  };

  const logout = async () => {
    await requestHandler(
      async () => await authApi.logout(),
      setLoading,
      () => {
        setUser(null);
        navigate("/login");
      },
      alert
    );
  };

  useEffect(() => {
    requestHandler(
      async () => await authApi.myAccount(),
      setLoading,
      (data) => {
        setUser(data as IUser);
      },
      ()=> {
          navigate('/login');
      }
    );
  }, [navigate]);

  // Provide the AuthContext to its children
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {loading ? "Loading..." : children}
    </AuthContext.Provider>
  );
};


export { AuthProvider, useAuth, AuthContext };
