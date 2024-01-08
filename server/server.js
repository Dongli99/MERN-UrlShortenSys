/**
 * @fileoverview Server file for the USS web application.
 * @module server
 */

"use strict";

import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import CookieParser from "cookie-parser";
import config from "./config/config.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import urlPairRouter from "./routes/urlPair.routes.js";
import UrlPairController from "./controllers/urlPair.controller.js";
import path from "path";
import { fileURLToPath } from "url";
import { ExceptionRoutes } from "./routes/exceptionRoutes.js";

// Use Node.js's __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

/**
 * @description Configuration for development and production modes.
 */
if (config.nodeEnv === "development") {
  console.log("Running development mode.");
  const corsOptions = {
    origin: config.origin,
    credentials: true,
  };
  app.use(cors(corsOptions));
} else {
  console.log("Running production mode.");
  app.use(cors());
}

app.use(express.json());
app.use(CookieParser());

// Connect to the MongoDB database
connectDB();

// Define routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/uss", urlPairRouter);
app.get("/test", (req, res) => {
  res.send("test ok");
});

/**
 * @description Serve static files in production mode.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
if (config.nodeEnv === "production") {
  console.log("Running production mode.");
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res, next) => {
    if (ExceptionRoutes.includes(req.url.substring(1))) {
      res.sendFile(
        path.resolve(__dirname, "../", "client", "dist", "index.html")
      );
    } else {
      next();
    }
  });
} else {
  app.get("/", (req, res) => res.send("Not on the production mode."));
}

/**
 * @description Redirect to the original URL based on the alias.
 */
app.get("/:alias", UrlPairController.redirectToOrigin);

/**
 * @description Start the server.
 */
app.listen(config.port, () => {
  console.log("Server is running on " + config.port);
});
