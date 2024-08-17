import mongoose from "mongoose";
const DB_NAME = "Gram_Panchayta";
const connectedDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`MongoDB Connected to ${DB_NAME}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectedDB;
