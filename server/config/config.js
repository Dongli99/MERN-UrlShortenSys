import process from "process";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const config = {
  dbURI: process.env.DB_URI,
  origin: process.env.ORIGIN,
  port: process.env.PORT,
  codeBook: process.env.CODE_BOOK,
  currAliasId: process.env.CURR_ALIAS_ID,
};

export default config;
