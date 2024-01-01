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
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

if (config.nodeEnv === "production") {
  const corsOptions = {
    origin: config.origin,
    credentials: true,
  };
  app.use(cors(corsOptions));
} else {
  app.use(cors());
}

app.use(express.json());
app.use(CookieParser());

connectDB();
console.log(__dirname);

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/uss", urlPairRouter);
app.get("/:alias", UrlPairController.redirectToOrigin);
app.get("/test", UrlPairController.redirectToOrigin);

if (config.nodeEnv === "production") {
  const distPath = path.join(__dirname, "../client/dist");
  app.use(express.static(distPath));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(distPath, "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Not on the production mode."));
}

app.listen(config.port, () => {
  console.log("Server is running on " + config.port);
});
