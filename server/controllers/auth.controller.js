import UserController from "./user.controller.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import TokenService from "../services/TokenService.js";

class AuthController {
  static async signupUser(req, res) {
    try {
      const user = await UserController.createUser(req, res);
      res.json(user);
    } catch (err) {
      throw err;
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserController.getUserByEmail(email);
      if (user) {
        const passMatch = bcrypt.compareSync(password, user.password);
        if (passMatch) {
          TokenService.generateToken(user, res);
        } else {
          res.status(422).json("Incorrect password.");
        }
      } else {
        res.status(422).json("User not found!");
      }
    } catch (err) {
      res.json("err occurred");
    }
  }

  static async logoutUser(req, res) {}

  static async resetPassword(req, res) {}

  static async verifyEmail(req, res) {}

  static async refreshToken(req, res) {}

  static async revokeToken(req, res) {}
}

export default AuthController;
