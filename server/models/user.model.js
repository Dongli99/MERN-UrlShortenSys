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
  createdAt: { type: Date, immutable: true, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
  this.updated = Date.now();
  next();
});

const User = mongoose.model("user", UserSchema);

export default User;
