import express from "express";
import Laptop from "../models/Laptop.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const laptops = await Laptop.find();
  res.json(laptops);
});

router.get("/:id", async (req, res) => {
  try {
    const laptop = await LaptopModel.findById(req.params.id);
    if (!laptop) return res.status(404).json({ message: "Not found" });
    res.json(laptop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default router;
