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
    imageUrl:
      "https://atlas-content-cdn.pixelsquid.com/stock-images/macbook-air-gold-laptop-72rDZq8-600.jpg",
  },
  {
    name: "Dell",
    price: "$1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
    imageUrl: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Pic.png",
  },
  {
    name: "HP",
    price: "$995",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
    imageUrl:
      "https://png.pngtree.com/png-vector/20240206/ourmid/pngtree-hp-laptop-white-background-png-image_11716727.png",
  },
  {
    name: "Lenovo",
    price: "$899 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
    imageUrl:
      "https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/415628-15-to-16-inch-laptops-lenovo-ideapad-1i-10041384.png",
  },
  {
    name: "Asus ZenBook",
    price: "$950",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
    imageUrl:
      "https://atlas-content-cdn.pixelsquid.com/stock-images/asus-zenbook-pro-dual-screen-laptop-YeXXVaE-600.jpg",
  },
  {
    name: "Acer Swift",
    price: "$870",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae.",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
    imageUrl:
      "https://hnsgsfp.imgix.net/9/images/detailed/103/Acer-SFG14-73T-55BH-Laptop-1.PNG?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress",
  },
  {
    name: "Microsoft Surface",
    price: "$1100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
    imageUrl:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-color-center-render-fy25:VP4-1260x795?fmt=png-alpha",
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
    imageUrl:
      "https://cdn.new-brz.net/app/public/models/MTP13HX-A/large/w/231108150054570863.webp",
  },
  {
    name: "Samsung Galaxy A22",
    price: "$680 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
    imageUrl:
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a22-1.jpg",
  },
  {
    name: "Google Pixel 9",
    price: "$790",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
    imageUrl:
      "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-1.jpg",
  },
  {
    name: "Lenovo",
    price: "$699",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
    imageUrl:
      "https://www.pngall.com/wp-content/uploads/8/Lenovo-PNG-High-Quality-Image.png",
  },
  {
    name: "Nokia Edge 5G",
    price: "$650",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis explicabo.",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
    imageUrl:
      "https://www.mobilebd.co/wp-content/uploads/2021/05/Nokia-Edge-2020-Official-Image.png",
  },
  {
    name: "Huawei Nova 12",
    price: "$720",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
    imageUrl:
      "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/nova-12s/list/blue.png",
  },
  {
    name: "OnePlus 12",
    price: "$850",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#F0F8FF",
    imageUrl:
      "https://image01.oneplus.net/media/202405/28/b96848b7acd10dafde32203d12f6fea7.png",
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

