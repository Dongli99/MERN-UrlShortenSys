import CurrAlias from "../models/CurrAlias.model.js";
import config from "../config/config.js";
import AliasService from "../services/AliasService.js";

class CurrAliasController {
  static async updateCurrAlias() {
    try {
      var currAlias = await CurrAlias.findById(config.currAliasId);
      currAlias.count += 1;
      currAlias.alias = AliasService.encode(currAlias.count);
      await currAlias.save();
      return currAlias.alias;
    } catch (err) {
      throw err;
    }
  }
}

export default CurrAliasController;
