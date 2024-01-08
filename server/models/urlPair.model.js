/**
 * @fileoverview Mongoose model for URL pair data.
 */

import mongoose from "mongoose";
const { Schema } = mongoose;

/**
 * @description Represents a geo-location with country, region, and city information
 * @typedef {Object} GeoLocation
 * @property {String} country - Country of the geo-location
 * @property {String} region - Region or state of the geo-location
 * @property {String} city - City of the geo-location
 */
const GeoLocationSchema = new Schema({
  country: String,
  region: String,
  city: String,
});

/**
 * @description Represents device information with device, operating system, and browser details
 * @typedef {Object} DeviceInfo
 * @property {String} device - Device name
 * @property {String} os - Operating system
 * @property {String} browser - Web browser
 */
const DeviceInfoSchema = new Schema({
  device: String,
  os: String,
  browser: String,
});

/**
 * @description Represents a click with timestamp and geo-location information
 * @typedef {Object} Click
 * @property {Date} timeStamp - Timestamp of the click
 * @property {GeoLocation} geoLocation - Geo-location information of the click
 * @property {DeviceInfo} deviceInfo - Device information of the click
 */
const ClickSchema = new Schema({
  timeStamp: { type: Date, default: Date.now },
  geoLocation: GeoLocationSchema,
  deviceInfo: DeviceInfoSchema,
});

/**
 * @description Represents an URL Pair with original URL, alias, and click information
 * @typedef {Object} UrlPair
 * @property {String} userId - User ID, default is "anonymous"
 * @property {String} originalUrl - Long URL provided by the user to be shortened
 * @property {String} alias - Alias of originalUrl, indexed for fast retrieval
 * @property {Date} createdAt - Timestamp when the URL Pair was created
 * @property {Date} modifiedAt - Timestamp when the URL Pair was last modified
 * @property {Date} expireAt - Expiration date of the URL Pair, default is 90 days from modifiedAt
 * @property {Array<Click>} clicks - Array of click information, each containing timestamp and geo-location
 */

const UrlPairSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  originalUrl: String,
  alias: { type: String, index: true, unique: true }, // Alias is indexed for fast retrieval
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  expireAt: {
    type: Date,
    default: function () {
      return this.modifiedAt.getTime() + 90 * 24 * 60 * 60 * 1000; // Default expiration is 90 days from modifiedAt
    },
  },
  clicks: [ClickSchema], // Array of click information
});

// Set up expiration for the URL Pair based on 'expireAt' field
UrlPairSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 }); // Set up expiration for the URL Pair

// Index for fast retrieval of clicks based on timestamp, geo-location, and device details
UrlPairSchema.index({
  "clicks.timeStamp": 1,
  "clicks.geoLocation.country": 1,
  "clicks.geoLocation.region": 1,
  "clicks.deviceInfo.os": 1,
}); // Index for fast retrieval

// Pre-save hook to update 'modifiedAt' timestamp before saving
UrlPairSchema.pre("save", function (next) {
  this.modifiedAt = Date.now();
  next();
});

/**
 * @description Mongoose model for UrlPair.
 * @type {mongoose.Model<UrlPair>}
 */
const UrlPair = mongoose.model("urlPair", UrlPairSchema);

export default UrlPair;
