import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  description: String,
  background: String,
  nameColor: String,
  linkColor: String,
  imageUrl: String
});

export default mongoose.model("Phone", phoneSchema);
