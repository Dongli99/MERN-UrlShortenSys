import process from "process";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ path: "./.env" });

const connectDB = async () => {
  try {
    if (!process.env.DB_URI) {
      //If uri is not defined, exit.
      console.error("DB_URI is not defined in the environment.");
      process.exit(1);
    }
    await mongoose.connect(process.env.DB_URI);
    // show connection status
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to Database.");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Mongoose connection error:", err);
    });
    mongoose.connection.on("disconnected", () => {
      console.warn("Mongoose disconnected");
    });
  } catch (err) {
    console.log("Failed to connect to Database!", err);
    process.exit(1);
  }
};

export default connectDB;
