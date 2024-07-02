import express from 'express';
import { createCampaign } from '../controllers/campaignController';

const router = express.Router();

// routes
router.post('/', createCampaign);

export default router;