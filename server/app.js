import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
  console.log("GET request received at /hello");
});
export { app };
