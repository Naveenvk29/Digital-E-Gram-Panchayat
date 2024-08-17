import dotenv from "dotenv";
import ConnectedDB from "./Config/index.db.js";
import { app } from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

ConnectedDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
