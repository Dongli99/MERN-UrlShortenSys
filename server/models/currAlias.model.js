/**
 * @fileoverview Defines the schema for the current alias model in the database.
 * @module CurrAliasModel
 */
import mongoose, { Schema } from "mongoose";

/**
 * @description Schema definition for the current alias model.
 * @typedef {Object} CurrAliasSchema
 * @property {Number} count - The count of the current alias.
 * @property {String} alias - The current alias string.
 */
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

/**
 * @description Model for the current alias in the database.
 * @typedef {Model} CurrAlias
 */
const CurrAlias = mongoose.model("currAlias", CurrAliasSchema);

export default CurrAlias;
