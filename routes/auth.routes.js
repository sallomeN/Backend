import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/auth.middleware.js";
import UserModel from "../models/User.model.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, lastName, email, phone, password } = req.body;

    const existingUsers = await UserModel.find({ email });

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
    // console.log("Body received:", req.body);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/check-token", authMiddleware, async (req, res) => {
  try {
    res.status(200).json({
      message: "Token is valid",
      userId: req.user.id,
    });
  } catch (error) {
    res.status(500).json({ message: "Token check failed" });
  }
});

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "profile details not found" });
  }
});

export default router;


router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, lastName, email, phone } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { name, lastName, email, phone },
      { new: true }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile" });
  }
});