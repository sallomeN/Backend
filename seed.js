import mongoose from "mongoose";
import dotenv from "dotenv";
import LaptopModel from "./models/Laptop.model.js";
import PhoneModel from "./models/Phone.model.js";

dotenv.config();
const laptopsArray = [
  {
    name: "MacBook Air",
    price: "$1199",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    name: "Dell",
    price: "$1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    name: "HP",
    price: "$995",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    name: "Lenovo",
    price: "$899 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    name: "Asus ZenBook",
    price: "$950",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    name: "Acer Swift",
    price: "$870",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae.",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    name: "Microsoft Surface",
    price: "$1100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
];

const phonesArray = [
  {
    name: "iPhone 15",
    price: "$999",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
  },
  {
    name: "Samsung Galaxy A22",
    price: "$680 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
  },
  {
    name: "Google Pixel 9",
    price: "$790",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
  },
  {
    name: "Lenovo",
    price: "$699",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
  },
  {
    name: "Nokia Edge 5G",
    price: "$650",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis explicabo.",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
  },
  {
    name: "Huawei Nova 12",
    price: "$720",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
  },
  {
    name: "OnePlus 12",
    price: "$850",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected!");

    await LaptopModel.insertMany(laptopsArray);
    await PhoneModel.insertMany(phonesArray);

    console.log("Seed inserted successfully!");

  } catch (err) {
    console.error("Seed error:", err);
  }
};

seedData();

