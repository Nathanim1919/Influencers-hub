import apiClient from "./apiClient";

const getSocialLinks = async (id: string) => {
  return apiClient.get(`/socialLinks/${id}`);
};

const saveInstagramuserName = async (instagram: string) => {
  return apiClient.post("/socialLinks/instagram", { instagram });
};

export { getSocialLinks, saveInstagramuserName };