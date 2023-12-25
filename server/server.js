"use strict";

import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/config.js";
import AuthController from "./controllers/auth.controller.js";

/*--delete after moving to controller--*/
import CookieParser from "cookie-parser";
import user from "./models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const bcryptSalt = bcrypt.genSaltSync(12);
import process from "process";
import dotenv from "dotenv";
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

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", AuthController.signupUser);
app.post("/login", AuthController.loginUser);
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) {
        throw err;
      } else {
        res.json(user);
      }
    });
  } else {
    res.json("not token");
  }
});

app.listen(4000);
