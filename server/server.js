"use strict";

import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import CookieParser from "cookie-parser";
import config from "./config/config.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import urlPairRouter from "./routes/urlPair.routes.js";
import CurrAlias from "./models/CurrAlias.model.js";
import UrlPairController from "./controllers/urlPair.controller.js";
/*--delete after moving to controller--*/

const app = express();

const corsOptions = {
  origin: config.origin,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(CookieParser());

connectDB();

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/uss", urlPairRouter);
app.get("/:alias", UrlPairController.redirectToOrigin);
app.get("/test", UrlPairController.redirectToOrigin);

app.listen(config.port, () => {
  console.log("Server is running on " + config.port);
});
