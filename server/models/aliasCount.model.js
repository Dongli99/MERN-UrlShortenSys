import mongoose, { Schema } from "mongoose";

const AliasCountSchema = new Schema({
  count: {
    type: Number,
    required: true,
  },
});
