"use strict";

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import process from "process";
import dotenv from "dotenv";
import user from "./models/user.js";
import bcrypt from "bcryptjs";
const app = express();
dotenv.config({ path: "./.env" });

const bcryptSalt = bcrypt.genSaltSync(12);

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URI);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userDoc = await user.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.listen(4000);
