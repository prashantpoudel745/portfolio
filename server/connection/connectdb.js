import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connection = () => {
  const MONGO_URI = process.env.MONGO_URI;
  mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
  });
};
export default connection;
