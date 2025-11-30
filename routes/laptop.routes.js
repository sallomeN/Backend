import express from "express";
import Laptop from "../models/Laptop.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const laptops = await Laptop.find();
  res.json(laptops);
});
export default router;
