import express from "express";
import { getStatus, runFile } from "../controllers/Code.js";

const router = express.Router();

router.get("/status", getStatus);
router.post("/run", runFile);

export default router;