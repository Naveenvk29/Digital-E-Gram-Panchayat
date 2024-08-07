import express from "express";
import cookiesParser from "cookie-parser";

const app = express();

// Middleware to parse cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

// API endpoints

app.get("/test", (req, res) => {
  res.json({ message: "API is working" });
  console.log("API is working");
});

export { app };
