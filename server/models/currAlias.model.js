import mongoose, { Schema } from "mongoose";

const CurrAliasSchema = new Schema({
  count: {
    type: Number,
    unique: true,
    required: true,
  },
  alias: {
    type: String,
    unique: true,
    required: true,
  },
});

const CurrAlias = mongoose.model("currAlias", CurrAliasSchema);

export default CurrAlias;
