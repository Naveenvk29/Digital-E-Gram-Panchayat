import mongoose from "mongoose";
const DB_NAME = "D-E-gram_panchayat";

const connectDB = async () => {
  try {
    const connectionInfo = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected successfully: ${connectionInfo.connection.host}`
    );
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
