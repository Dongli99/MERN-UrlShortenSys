import UrlPair from "../models/urlPair.model.js";
import CurrAliasController from "./currAlias.controller.js";
import UserController from "./user.controller.js";
import geoip from "geoip-lite";

/**
 * @class
 * @classdesc Controller for managing URL Pairs
 */
class UrlPairController {
  /**
   * Create a new URL Pair
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @returns {Object} - Created URL Pair
   */
  static async createUrlPair(req, res) {
    try {
      const { userId, originalUrl, alias } = req.body;
      const newUrlPair = new UrlPair({
        userId: userId,
        originalUrl,
        alias: alias || (await CurrAliasController.updateCurrAlias()),
      });
      const savedUrlPair = await newUrlPair.save();
      res.status(201).json(savedUrlPair);
      if (userId) {
        UserController.addUrlPairToUser(userId, savedUrlPair._id);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  /**
   * Get all URL Pairs
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @returns {Object[]} - Array of URL Pairs
   */
  static async getAllUrlPairs(req, res) {
    try {
      const urlPairs = await UrlPair.find();
      res.status(200).json(urlPairs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  /**
   * Get a specific URL Pair by alias
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @returns {Object} - URL Pair
   */
  static async getUrlPair(req, res) {
    try {
      const { alias } = req.params;
      const urlPair = await UrlPair.findOne({ alias });
      if (!urlPair) {
        res.status(404).json({ error: "URL Pair not found" });
      } else {
        res.status(200).json(urlPair);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  /**
   * Update a URL Pair by alias
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @returns {Object} - Updated URL Pair
   */
  static async updateUrlPair(req, res) {
    try {
      const { alias } = req.params;
      const updatedUrlPair = await UrlPair.findOneAndUpdate(
        { alias },
        { $set: req.body },
        { new: true }
      );
      if (!updatedUrlPair) {
        res.status(404).json({ error: "URL Pair not found" });
      } else {
        res.status(200).json(updatedUrlPair);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  /**
   * Delete a URL Pair by alias
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @returns {Object} - Deleted URL Pair
   */
  static async deleteUrlPair(req, res) {
    try {
      const { alias } = req.params;
      const deletedUrlPair = await UrlPair.findOneAndDelete({ alias });
      if (!deletedUrlPair) {
        res.status(404).json({ error: "URL Pair not found" });
      } else {
        res.status(200).json(deletedUrlPair);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async redirectToOrigin(req, res) {
    // const { alias } = req.params;
    const ip = req.ip;
    let city = "",
      region = "",
      country = "";
    if (ip || ip !== "::1") {
      const location = geoip.lookup(ip);
      city = location?.city || "";
      region = location?.region || "";
      country = location?.country || "";
    }
    const { alias } = req.params;
    const { originalUrl } = await UrlPair.findOne({ alias });
    res.redirect(originalUrl);
  }
}

export default UrlPairController;
