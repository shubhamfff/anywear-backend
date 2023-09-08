import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();

connectDB();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`connected to ${PORT}`);
});
