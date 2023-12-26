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

  static async getUserById(userId, sanitize = true) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        return null;
      }
      if (sanitize) {
        const sanitizedUser = this.sanitizeUser(user);
        return sanitizedUser;
      }
      return user;
    } catch (err) {
      throw err;
    }
  }

  static async getUserByEmail(email) {
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

  static async sanitizeUser(user) {
    const { password, ...sanitizedUser } = user.toObject();
    return sanitizedUser;
  }
}

export default UserController;
