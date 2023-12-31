/**
 * @fileoverview Controller for managing URL Pairs
 * @module UrlPairController
 */

import UrlPair from "../models/urlPair.model.js";
import ClickInfoService from "../services/ClickInfoService.js";
import CurrAliasController from "./currAlias.controller.js";
import UserController from "./user.controller.js";

/**
 * @class
 * @classdesc Controller for managing URL Pairs
 * @exports UrlPairController
 */
class UrlPairController {
  /**
   * @description Create a new URL Pair
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
        // set customized alias, or generate an alias.
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
   * @description Get all URL Pairs
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
   * @description Get a specific URL Pair by alias
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
   * @description Update a URL Pair by alias
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @returns {Object} - Updated URL Pair
   */
  static async updateUrlPairAlias(req, res) {
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
   * @description Delete a URL Pair by alias
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

  /**
   * @description Redirect to the original URL based on the provided alias
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @returns {void}
   */
  static async redirectToOrigin(req, res) {
    const { alias } = req.params;
    const { city, region, country } = ClickInfoService.getGeolocationInfo(req);
    const { device, os, browser } = ClickInfoService.getDeviceInfo(req);
    try {
      const urlPair = await UrlPair.findOne({ alias });
      if (urlPair && urlPair.originalUrl) {
        // record the click
        urlPair.clicks.push({
          timeStamp: new Date(),
          geoLocation: { city, region, country },
          deviceInfo: { device, os, browser },
        });
        await urlPair.save();
        // redirect to original URL
        res.redirect(urlPair.originalUrl);
      } else {
        res.redirect("/aliasnotfound");
      }
    } catch (error) {
      throw error;
    }
  }
}

export default UrlPairController;
