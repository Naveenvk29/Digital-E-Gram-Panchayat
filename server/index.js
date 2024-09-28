import dotenv from "dotenv";
import connectDB from "./config/index.DB.js";
import { app } from "./app.js";

dotenv.config();

// Connect to MongoDB

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1); // exit with error code 1 in case of connection failure
  });
