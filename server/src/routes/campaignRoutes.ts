import express from 'express';
import { createCampaign, getAllCampaigns } from '../controllers/campaignController';
import { verifyUser } from '../middlewares/authMiddleware';

const router = express.Router();

// routes
router.get('/', verifyUser,getAllCampaigns);
router.post('/',verifyUser, createCampaign);

export default router;