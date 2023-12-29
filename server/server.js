"use strict";

import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import AuthController from "./controllers/auth.controller.js";

/*--delete after moving to controller--*/
import CookieParser from "cookie-parser";
import user from "./models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const bcryptSalt = bcrypt.genSaltSync(12);
import process from "process";
import dotenv from "dotenv";
import UserController from "./controllers/user.controller.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import urlPairRouter from "./routes/urlPair.routes.js";
dotenv.config({ path: "./.env" });
/*--delete after moving to controller--*/

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(CookieParser());

connectDB();

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/url", urlPairRouter);

app.listen(process.env.PORT);
