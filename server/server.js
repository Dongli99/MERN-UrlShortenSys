"use strict";

import express from "express";
import cors from "cors";
import user from "./models/user.model.js";
import bcrypt from "bcryptjs";
import connectDB from "./config/config.js";
const app = express();

const bcryptSalt = bcrypt.genSaltSync(12);

app.use(cors());
app.use(express.json());

connectDB();

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
