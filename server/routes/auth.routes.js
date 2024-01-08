/**
 * @fileoverview Express router for authentication-related routes.
 * @module server/routes/auth
 */

import express from "express";
import AuthController from "../controllers/auth.controller.js";

const authRouter = express.Router();

/**
 * @description Route to register a new user.
 * @name POST/api/auth/register
 * @function
 * @memberof module:server/routes/auth
 * @inner
 * @param {string} path - Express route path.
 * @param {function} middleware - Express middleware function.
 */
authRouter.post("/register", AuthController.signupUser);

/**
 * @description Route to log in a user.
 * @name POST/api/auth/login
 * @function
 * @memberof module:server/routes/auth
 * @inner
 * @param {string} path - Express route path.
 * @param {function} middleware - Express middleware function.
 */
authRouter.post("/login", AuthController.loginUser);

export default authRouter;
