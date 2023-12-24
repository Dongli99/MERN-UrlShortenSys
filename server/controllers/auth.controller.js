import user from "../models/user.model.js";
import UserController from "./user.controller.js";

class AuthController {
  static async loginUser(req, res) {}
  static async logoutUser(req, res) {}
  static async signupUser(req, res) {
    try {
      const user = await UserController.createUser(req, res);
      res.json(user);
    } catch (err) {
      throw err;
    }
  }
  static async resetPassword(req, res) {}
  static async verifyEmail(req, res) {}
  static async refreshToken(req, res) {}
  static async revokeToken(req, res) {}
}

export default AuthController;
