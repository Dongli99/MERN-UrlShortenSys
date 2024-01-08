/**
 * @fileoverview Service for encoding aliases based on a code book.
 * @module AliasService
 */
import config from "../config/config.js";

/**
 * @class
 * @classdesc Service for encoding aliases based on a code book.
 * @exports AliasService
 */
class AliasService {
  /**
   * @description Encodes a numeric count into an alias using a code book.
   * @param {number} count - Numeric count to encode.
   * @returns {string} - Encoded alias.
   */
  static encode(count) {
    const base = config.codeBook.length;
    let alias = "";
    while (count > 0) {
      let index = count % base;
      count = Math.floor(count / base);
      alias += config.codeBook[index];
    }
    return alias;
  }
}

export default AliasService;
