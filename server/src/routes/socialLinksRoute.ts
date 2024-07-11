import express from "express";
import { saveInstagramuserName } from "../controllers/socialLinkController";

const router = express.Router();


// routes
router.post("/instagram", saveInstagramuserName);

export default router;