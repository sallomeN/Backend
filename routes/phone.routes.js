import express from "express";
import Phone from "../models/Phone.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const phones = await Phone.find();
  res.json(phones);
});
export default router;
