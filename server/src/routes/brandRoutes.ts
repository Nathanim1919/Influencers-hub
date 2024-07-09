import express from 'express';
import { getBrandCampaigns, getSavedInfluencers, saveInfluencer } from '../controllers/brandController';

const router = express.Router();


// routes for brands
router.get('/campaigns', getBrandCampaigns);
router.post('/saveInfluencer', saveInfluencer);
router.get('/savedInfluencers', getSavedInfluencers);


export default router;