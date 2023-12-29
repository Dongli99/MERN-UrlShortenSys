import config from "../config/config.js";

class AliasService {
  static encode(count) {
    base = config.codeBook.length;
    alias = "";
    while (count > 0) {
      index = count % base;
      count = Math.floor(count / base);
      alias += config.codeBook[index];
    }
  }
}
