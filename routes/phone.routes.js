import express from "express";
import Phone from "../models/Phone.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const phones = await Phone.find();
    res.status(200).json(phones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id);
    if (!phone) return res.status(404).json({ message: "Not found" });
    res.json(phone);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default router;
