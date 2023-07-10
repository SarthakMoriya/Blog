const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./Controller/authController");
const blogController = require("./Controller/blogController");
const dotenv = require("dotenv").config();

const app = express();

//Connecting DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("DB Connected");
});

//middlewares
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/auth", authController);
app.use("/blog", blogController);

//Starting Server
app.listen(5000, () => {
  console.log("Server running on PORT:5000");
});
