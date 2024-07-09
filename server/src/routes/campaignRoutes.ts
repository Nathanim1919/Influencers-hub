import express from 'express';
import { approveInfluencer, createCampaign, getAllCampaigns } from '../controllers/campaignController';
import { verifyUser } from '../middlewares/authMiddleware';

const router = express.Router();

// routes
router.post('/:campaignId/applications/:influencerId/accept', verifyUser, approveInfluencer);
router.get('/', verifyUser,getAllCampaigns);
router.post('/',verifyUser, createCampaign);

export default router;