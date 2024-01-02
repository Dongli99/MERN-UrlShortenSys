import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    if (!config.dbURI) {
      //If uri is not defined, exit.
      console.error("DB_URI is not defined in the environment.");
      process.exit(1);
    }
    await mongoose.connect(config.dbURI);
    // show connection status
    console.log("DB connected.");
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
