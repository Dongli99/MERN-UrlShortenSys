/**
 * @fileoverview Express router for user-related routes.
 * @module server/routes/user
 */

import express from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = express.Router();

/**
 * @description Route to get user profile based on the authentication token.
 * @name GET/api/user/profile
 * @function
 * @memberof module:server/routes/user
 * @inner
 * @param {string} path - Express route path.
 * @param {function} middleware - Express middleware function.
 */
userRouter.get("/profile", UserController.getProfileByToken);

export default userRouter;
