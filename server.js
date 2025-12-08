import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import laptopRouter from "./routes/laptop.routes.js";
import phoneRouter from "./routes/phone.routes.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const app = express(); 

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/laptops", laptopRouter);
app.use("/api/phones", phoneRouter);
app.use("/api/auth", authRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on port " + PORT));
