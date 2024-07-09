import apiClient from "./apiClient";

export interface Brand {
  id: number;
  brandName?: string;
}

const editBrand = async (brand: Partial<Brand>) => {
  return await apiClient.put(`/brands/${brand.id}`, brand);
};

const saveInfluencer = async (influencerId: string) => {
  return await apiClient.post("/brands/saveInfluencer", { influencerId });
};

const getSavedInfluencers = async () => {
  return await apiClient.get("/brands/savedInfluencers");
};

export default {
  editBrand,
  saveInfluencer,
  getSavedInfluencers,
};
