import express from "express";
import { fetchSMS, smsReceived } from "../controllers/smsController";

const router = express.Router();

router.route("/").get(fetchSMS);
router.route("/").get(smsReceived);

export default router;
