"use strict";

import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json({ name, email, password });
});

app.listen(4000);
