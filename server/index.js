import dotenv from "dotenv";
import connectDB from "./Config/index.db.js";
import { app } from "./app.js";

dotenv.config();
const port = process.env.PORT || 5555;
connectDB()
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
