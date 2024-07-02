import express from 'express';
import { getBrandCampaigns } from '../controllers/brandController';

const router = express.Router();


// routes for brands
router.get('/campaigns', getBrandCampaigns);




export default router;