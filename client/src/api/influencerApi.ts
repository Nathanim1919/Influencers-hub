import apiClient from "./apiClient";

const getInfluencer = async (id: string) => {
  return apiClient.get(`/influencers/${id}`);
};

const getInfluencers = async () => {
  return apiClient.get("/influencers");
};

const saveInfluencer = async (influencerId: string) => {
  return apiClient.post("/influencers", influencerId);
};

const saveCampaign = async (campaignId: string) => {
  return apiClient.post("/influencer/savecampaign", campaignId);
};

const applyToCampaign = async (campaignId: string) => {
  return apiClient.post("/influencer/apply", campaignId);
};

const getSavedCampaigns = async () => {
  return apiClient.get("/influencer/savedcampaigns");
};

const getAppliedCampaigns = async () => {
  return apiClient.get("/influencer/appliedcampaigns");
};

export {
  getInfluencer,
  getInfluencers,
  saveInfluencer,
  saveCampaign,
  applyToCampaign,
  getSavedCampaigns,
  getAppliedCampaigns,
};
