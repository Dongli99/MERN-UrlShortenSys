/**
 * @fileoverview Controller handling user-related operations.
 * @class
 * @name UserController
 */

import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const bcryptSalt = bcrypt.genSaltSync(12);

/**
 * @description Methods for handling user-related operations.
 * @classdesc
 */
class UserController {
  /**
   * @description Create a new user.
   * @static
   * @async
   * @function
   * @memberof UserController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
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

  /**
   * @description Update user details.
   * @static
   * @async
   * @function
   * @memberof UserController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  static async updateUser(req, res) {}

  /**
   * @description Get all users.
   * @static
   * @async
   * @function
   * @memberof UserController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  static async getAllUsers(req, res) {}

  /**
   * @description Asynchronously retrieves a user by their ID.
   * @static
   * @async
   * @function
   * @memberof UserController
   * @param {string} userId - The unique identifier of the user.
   * @param {boolean} [sanitize=true] - Flag to determine whether to sanitize the user data (default: true).
   * @returns {Object|null} A Promise that resolves to the user object or null if not found.
   * @throws {Error} If an error occurs during the database query or sanitization process.
   */
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

  /**
   * @description Get user data based on the email address.
   * @static
   * @function
   * @memberof UserController
   * @param {String} email - Email address.
   * @returns {Object|null} - return user object or null if user not found.
   */
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

  /**
   * @description Get user profile based on the authentication token.
   * @static
   * @function
   * @memberof UserController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  static getProfileByToken(req, res) {
    const { token } = req.cookies;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
        if (err) throw err;
        const user = await UserController.getUserById(userData.id);
        if (!user) {
          res.json("user not found!");
        }
        res.json(user);
      });
    } else {
      res.json("no token");
    }
  }

  /**
   * @description Add a URL pair to the user's list of URL pairs.
   * @static
   * @async
   * @function
   * @memberof UserController
   * @param {string} userId - ID of the user.
   * @param {string} urlPairId - ID of the URL pair.
   * @returns {Object|null} Updated user object or null if user not found.
   */
  static async addUrlPairToUser(userId, urlPairId) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        return null;
      }
      user.urlPairs.push(urlPairId);
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }

  /**
   * @description Delete a user.
   * @static
   * @async
   * @function
   * @memberof UserController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  static async deleteUser(req, res) {}

  /**
   * @description Sanitize user object by removing sensitive information.
   * @static
   * @function
   * @memberof UserController
   * @param {Object} user - User object.
   * @returns {Object} Sanitized user object.
   */
  static sanitizeUser(user) {
    // avoid sensitive and unnecessary info
    const { password, __v, ...sanitizedUser } = user.toObject();
    return sanitizedUser;
  }
}

export default UserController;
