import mongoose from "mongoose";
const { Schema } = mongoose;

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
  created: { type: Date, immutable: true, default: Date.now },
  updated: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
  this.updated = Date.now();
});

const User = mongoose.model("user", UserSchema);

export default User;
