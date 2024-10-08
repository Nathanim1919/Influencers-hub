import { Router } from "express";
import { login, logout, register } from "../controllers/authController";
import { myAccount } from "../controllers/accountController";
const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/my-account", myAccount);
router.post("/logout", logout);
router.get("/refresh-token", ()=> {});
router.get("/forgot-password", ()=> {});
router.get("/reset-password", ()=> {});
router.get("/change-password", ()=> {});

export default router;
