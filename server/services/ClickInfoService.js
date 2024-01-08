/**
 * @fileoverview Service for retrieving geolocation and device information from user requests.
 * @module ClickInfoService
 */

import geoip from "geoip-lite";
import parser from "ua-parser-js";

/**
 * @class
 * @classdesc Service for retrieving geolocation and device information.
 * @exports ClickInfoService
 */
class ClickInfoService {
  /**
   * @description Gets geolocation information based on the user's IP address.
   * @param {Object} req - Express request object.
   * @returns {Object} - Object containing city, region, and country.
   */
  static getGeolocationInfo(req) {
    // translate ip into geolocation info
    const ip = req.headers["x-real-ip"];
    let city = "",
      region = "",
      country = "";
    if (ip || ip !== "::1") {
      const location = geoip.lookup(ip);
      city = location?.city || "";
      region = location?.region || "";
      country = location?.country || "";
    }
    return { city, region, country };
  }

  /**
   * @description Gets device information based on the user agent.
   * @param {Object} req - Express request object.
   * @returns {Object} - Object containing device, OS, and browser information.
   */
  static getDeviceInfo(req) {
    // retrieve device info from user agent
    let device = "",
      os = "",
      browser = "";
    console.log(req.headers["user-agent"]);
    const ua = parser(req.headers["user-agent"]);
    device = ua?.device.vendor || "";
    os = ua?.os.name || "";
    browser = ua?.browser.name || "";
    return { device, os, browser };
  }
}

export default ClickInfoService;
