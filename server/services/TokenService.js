/**
 * @fileoverview Token service for handling JWT token generation and cookie handling.
 * @module TokenService
 */

import jwt from "jsonwebtoken";
import process from "process";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

/**
 * @class
 * @classdesc Service for handling JWT token generation and cookie handling.
 * @exports TokenService
 */
class TokenService {
  /**
   * @description Generates a JWT token and sends it to cookies.
   * @param {Object} user - User object for whom the token is generated.
   * @param {Object} res - Express response object.
   * @throws {Error} If there is an issue generating or sending the token.
   */
  static generateToken(user, res) {
    // generate token and send token to cookies.
    try {
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        }
      );
      res.cookie("token", token).json({
        token,
      });
    } catch (err) {
      throw err;
    }
  }
}

export default TokenService;
