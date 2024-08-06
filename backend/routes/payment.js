import express from "express";
import { create_order, verify_payment } from "../controllers/payment";

const router = express.Router();

router.post("/create-order", create_order);
router.post("/verify-payment", verify_payment);
