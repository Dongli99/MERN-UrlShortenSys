/**
 * @fileoverview Module for connecting to the MongoDB database.
 * @module server/config/connectDB
 */

import mongoose from "mongoose";
import config from "./config.js";

/**
 * @description Establishes a connection to the MongoDB database.
 * @function
 * @async
 * @throws {Error} If the DB_URI is not defined.
 */
const connectDB = async () => {
  try {
    // Check if the DB_URI is defined
    if (!config.dbURI) {
      console.error("DB_URI is not defined in the environment.");
      process.exit(1);
    }

    // Connect to the MongoDB database
    await mongoose.connect(config.dbURI);

    // Show connection status
    console.log("DB connected.");

    // Event listeners for connection status
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
