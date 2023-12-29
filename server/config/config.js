import process from "process";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const config = {
  dbURI: process.env.DB_URI,
  codeBook: process.env.CODE_BOOK,
};

export default config;
