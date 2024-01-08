/**
 * @fileoverview Mongoose model for user data.
 * @typedef {Object} User
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email of the user (unique).
 * @property {string} password - The hashed password of the user.
 * @property {Array.<mongoose.Schema.Types.ObjectId>} urlPairs - Array of URL pair IDs associated with the user.
 * @property {Date} createdAt - The date when the user was created.
 * @property {Date} updatedAt - The date when the user was last updated.
 */

import mongoose from "mongoose";
const { Schema } = mongoose;

/**
 * @description Mongoose schema for User model.
 * @type {mongoose.Schema}
 */
const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: { type: String, unique: true },
  password: String,
  urlPairs: [{ type: mongoose.Schema.Types.ObjectId, ref: "urlPair" }],
  createdAt: { type: Date, immutable: true, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

/**
 * @description Mongoose pre-save hook to update the 'updatedAt' field.
 * @function
 * @name pre-save
 * @memberof module:server/models/user.model
 */
UserSchema.pre("save", function (next) {
  this.updated = Date.now();
  next();
});

/**
 * @description Mongoose model for User.
 * @type {mongoose.Model<User>}
 */
const User = mongoose.model("user", UserSchema);

export default User;
