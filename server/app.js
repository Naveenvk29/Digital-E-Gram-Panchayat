import express from "express";
import cors from "cors";
import cookiesParser from "cookie-parser";
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(cookiesParser());

app.get("/", (req, res) => {
  res.send("hello world");
  console.log("hello world");
});

export { app };
