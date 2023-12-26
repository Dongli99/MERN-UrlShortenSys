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
});

const User = mongoose.model("user", UserSchema);

export default User;
