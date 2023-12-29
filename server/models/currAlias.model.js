import mongoose, { Schema } from "mongoose";

const CurrAliasSchema = new Schema(
  {
    count: {
      type: Number,
      required: true,
    },
    alias: {
      type: String,
      required: true,
    },
  },
  { collation: "currAlias" }
);

const CurrAlias = mongoose.model("currAlias", CurrAliasSchema);

export default CurrAlias;
