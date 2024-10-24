import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRouter from "./routes/user.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import applicationRoutes from "./routes/application.routes.js";

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRouter);
app.use("/api/services", serviceRoutes);
app.use("/api/applications", applicationRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
  console.log("GET request received at /hello");
});
export { app };
