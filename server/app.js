import express from "express";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRouter);

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
  console.log("GET request received at /hello");
});
export { app };
