import express from "express";

import {
  getInfluencers,
  getInfluencer,
  saveInfluencer,
  saveCampaign,
  applyToCampaign,
  getSavedCampaigns,
  getAppliedCampaigns
} from "../controllers/influencerController";

const router = express.Router();

// Define specific routes before the parameterized :id route
router.get("/savedcampaigns", getSavedCampaigns);
router.get("/appliedCampaigns", getAppliedCampaigns);
router.post("/savecampaign", saveCampaign);
router.post("/apply", applyToCampaign);

// Generic routes
router.get("/", getInfluencers);
router.get("/:id", getInfluencer);
router.post("/", saveInfluencer);

export default router;