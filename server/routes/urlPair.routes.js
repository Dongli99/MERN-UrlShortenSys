/**
 * @fileoverview Express router for URL pair-related routes.
 * @module server/routes/urlPair
 */

import express from "express";
import UrlPairController from "../controllers/urlPair.controller.js";

const urlPairRouter = express.Router();

/**
 * Route to create a new URL pair.
 * @name POST/api/urlPair/createUrlPair
 * @function
 * @memberof module:server/routes/urlPair
 * @inner
 * @param {string} path - Express route path.
 * @param {function} middleware - Express middleware function.
 */
urlPairRouter.post("/createUrlPair", UrlPairController.createUrlPair);

/**
 * Route to get a URL pair by alias.
 * @name GET/api/urlPair/getUrlPair/:alias
 * @function
 * @memberof module:server/routes/urlPair
 * @inner
 * @param {string} path - Express route path.
 * @param {function} middleware - Express middleware function.
 */
urlPairRouter.get("/getUrlPair/:alias", UrlPairController.getUrlPair);

/**
 * Route to update the alias of a URL pair.
 * @name PUT/api/urlPair/updateUrlPair/:alias
 * @function
 * @memberof module:server/routes/urlPair
 * @inner
 * @param {string} path - Express route path.
 * @param {function} middleware - Express middleware function.
 */
urlPairRouter.put(
  "/updateUrlPair/:alias",
  UrlPairController.updateUrlPairAlias
);

/**
 * @description Route to delete a URL pair by alias.
 * @name DELETE/api/urlPair/deleteUrlPair/:alias
 * @function
 * @memberof module:server/routes/urlPair
 * @inner
 * @param {string} path - Express route path.
 * @param {function} middleware - Express middleware function.
 */
urlPairRouter.delete("/deleteUrlPair/:alias", UrlPairController.deleteUrlPair);

export default urlPairRouter;
