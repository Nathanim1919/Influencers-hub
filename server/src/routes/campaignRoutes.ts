import express from 'express';
import { createCampaign, getAllCampaigns } from '../controllers/campaignController';

const router = express.Router();

// routes
router.get('/', getAllCampaigns);
router.post('/', createCampaign);

export default router;