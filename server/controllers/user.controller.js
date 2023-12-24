import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
const bcryptSalt = bcrypt.genSaltSync(12);

class UserController {
  static async createUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
      const newUser = await user.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
      });
      return newUser;
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(req, res) {}

  static async getAllUsers(req, res) {}

  static async getUserById(req, res) {}

  static async deleteUser(req, res) {}
}

export default UserController;
