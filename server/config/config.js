/**
 * @fileoverview Configuration settings for the USS web server.
 * @module server/config/config
 */

import process from "process";
import dotenv from "dotenv";
// Load environment variables from the .env file
dotenv.config({ path: "./.env" });

/**
 * @description Configuration object containing various settings.
 * @typedef {Object} Config
 * @property {string} dbURI - URI for connecting to the MongoDB database.
 * @property {string} origin - Origin URL for CORS settings.
 * @property {number} port - Port number on which the server will run.
 * @property {string} codeBook - Code book for authentication.
 * @property {string} currAliasId - Current alias ID for URL shortening.
 * @property {string} nodeEnv - Node.js environment (development/production).
 */

/**
 * Configuration object with settings from environment variables.
 * @type {Config}
 */
const config = {
  dbURI: process.env.DB_URI,
  origin: process.env.ORIGIN,
  port: process.env.PORT,
  codeBook: process.env.CODE_BOOK,
  currAliasId: process.env.CURR_ALIAS_ID,
  nodeEnv: process.env.NODE_ENV,
};

export default config;
