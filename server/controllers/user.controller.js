import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
const bcryptSalt = bcrypt.genSaltSync(12);

class UserController {
  static async createUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
      });
      res.json({ message: "New User created successfully", newUser });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async updateUser(req, res) {}

  static async getAllUsers(req, res) {}

  static async getUserById(req, res) {
    const userId = req.params._id;
    try {
      const user = await User.findOne({ userId });
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
      const sanitizedUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      return sanitizedUser;
    } catch (err) {
      throw err;
    }
  }

  static async getUserByEmail(email, sanitized = false) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return null;
      }
      return user;
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(req, res) {}
}

export default UserController;
