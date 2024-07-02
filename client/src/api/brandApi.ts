import apiClient from "./apiClient";

export interface Brand {
  id: number;
  brandName?: string;
}

export const editBrand = async (brand: Partial<Brand>) => {
  return await apiClient.put(`/brands/${brand.id}`, brand);
};
