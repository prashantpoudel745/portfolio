import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Contact from "./models/usermodel.js";
import connection from "./connection/connectdb.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connection();
app.post("/api/contact", async (req, res) => {
  const { email, username, message } = req.body;
  console.log(email, username, message);
  const user = await Contact.create({
    email,
    username,
    message,
  });
  console.log(user);
  res
    .status(200)
    .json({ message: "Contact form submitted successfully", data: user });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});