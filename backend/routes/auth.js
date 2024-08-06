import express from "express";
import {
  register,
  login,
  forgot_password,
  reset_password,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/forgot-password", forgot_password);
router.post("/reset-password/:token", reset_password);

export default router;
