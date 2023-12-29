import config from "../config/config.js";

class AliasService {
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
