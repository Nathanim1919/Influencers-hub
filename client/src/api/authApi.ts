import apiClient from "./apiClient";

// Register Function
const register = async (data: { email: string; password: string }) => {
  return await apiClient.post("/auth/register", data);
};

const login = async (data: { email: string; password: string }) => {
  return await apiClient.post("/auth/login", data);
};

const logout = async () => {
  return await apiClient.post("/auth/logout");
};

const myAccount = async () => {
  return await apiClient.get("/auth/my-account");
};

export { register, login, logout, myAccount };
