"use strict";

import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/config.js";
import AuthController from "./controllers/auth.controller.js";

/*--delete after moving to controller--*/
import user from "./models/user.model.js";
import bcrypt from "bcryptjs";
const bcryptSalt = bcrypt.genSaltSync(12);
/*--delete after moving to controller--*/

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", AuthController.signupUser);
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await user.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      res.json("pass ok");
    } else {
      res.status(422).json("wrong pass.");
    }
  } else {
    res.json("User not found.");
  }
});

app.listen(4000);
