import express from "express";
import Laptop from "../models/Laptop.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const laptops = await Laptop.find();
    res.status(200).json(laptops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (!laptop) return res.status(404).json({ message: "Not found" });
    res.json(laptop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default router;
