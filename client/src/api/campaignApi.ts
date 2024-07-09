import { Campaign } from "../interfaces/campaignInterface";
import apiClient from "./apiClient";


const createCampaign = async (campaign: Partial<Campaign>) => {
    return await apiClient.post("/campaigns", campaign);
};

const editCampaign = async (campaign: Partial<Campaign>) => {
    return await apiClient.put(`/campaigns/${campaign._id}`, campaign);
};

const deleteCampaign = async (id: number) => {
    return await apiClient.delete(`/campaigns/${id}`);
};

const getCampaigns = async () => {
    return await apiClient.get("/campaigns");
};

const getCampaign = async (id: number) => {
    return await apiClient.get(`/campaigns/${id}`);
};

const getApplications = async (id: number) => {
    return await apiClient.get(`/campaigns/${id}/applications`);
};

const approveInfluencer = async (campaignId: string, influencerId: string) => {
    return await apiClient.post(`/campaigns/${campaignId}/applications/${influencerId}/accept`);
};


const getPerformanceMetrics = async (id: number) => {
    return await apiClient.get(`/campaigns/${id}/performance-metrics`);
};

const setPerformanceMetrics = async (id: number, performanceMetrics: Partial<Campaign["performanceMetrics"]>) => {
    return await apiClient.put(`/campaigns/${id}/performance-metrics`, performanceMetrics);
};

const getBrandCampaigns = async () => {
    return await apiClient.get("/brands/campaigns");
};


export {
    createCampaign,
    editCampaign,
    deleteCampaign,
    getCampaigns,
    getCampaign,
    getApplications,
    approveInfluencer,
    rejectInfluencer,
    getPerformanceMetrics,
    setPerformanceMetrics,
    getBrandCampaigns
}