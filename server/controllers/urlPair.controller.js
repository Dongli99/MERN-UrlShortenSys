import UrlPair from "../models/urlPair.model.js";
import CurrAliasController from "./currAlias.controller.js";

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
}

export default UrlPairController;
