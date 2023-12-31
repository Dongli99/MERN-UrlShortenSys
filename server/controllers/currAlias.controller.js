/**
 * @fileoverview Controller for managing the current alias in the database.
 * @module CurrAliasController
 */

import CurrAlias from "../models/currAlias.model.js";
import config from "../config/config.js";
import AliasService from "../services/AliasService.js";
import { ExceptionRoutes } from "../routes/exceptionRoutes.js";

/**
 * @class
 * @classdesc Controller for managing the current alias in the database.
 * @exports CurrAliasController
 */
class CurrAliasController {
  /**
   * @description Update the current alias in the database.
   * @returns {Promise<String>} - The updated current alias.
   * @throws {Error} If there is an issue updating the current alias.
   */
  static async updateCurrAlias() {
    try {
      var currAlias = await CurrAlias.findById(config.currAliasId);
      currAlias.count += 1;
      currAlias.alias = AliasService.encode(currAlias.count);
      if (ExceptionRoutes.includes(currAlias.alias)) {
        CurrAliasController.updateCurrAlias();
      } else {
        await currAlias.save();
        return currAlias.alias;
      }
    } catch (err) {
      throw err;
    }
  }
}

export default CurrAliasController;
