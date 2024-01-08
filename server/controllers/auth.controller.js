/**
 * @fileoverview Controller for handling user authentication.
 * @module AuthController
 */

import UserController from "./user.controller.js";
import bcrypt from "bcryptjs";
import TokenService from "../services/TokenService.js";

/**
 * @class
 * @classdesc Controller for handling user authentication.
 * @exports AuthController
 */
class AuthController {
  /**
   * @description Sign up a new user.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Object} - JSON object containing user information.
   * @throws {Error} If there is an issue creating the user.
   */
  static async signupUser(req, res) {
    try {
      const user = await UserController.createUser(req, res);
      res.json(user);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @description Log in a user and generate an authentication token.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Object} - JSON object containing user information.
   */
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
        res.status(404).json("User not found!");
      }
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  /**
   * @description Reset user password.
   */
  static async resetPassword(req, res) {}

  /**
   * @description Verify user email.
   */
  static async verifyEmail(req, res) {}

  /**
   * @description Refresh authentication token.
   */
  static async refreshToken(req, res) {}

  /**
   * @description Revoke user token.
   */
  static async revokeToken(req, res) {}
}

export default AuthController;
