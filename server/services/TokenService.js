import jwt from "jsonwebtoken";
import process from "process";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

class TokenService {
  static generateToken(id, res) {
    // generate token and send token to cookies.
    try {
      const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      res
        .cookie("token", token, {
          // handle accessibility for security
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        })
        .json(token);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default TokenService;
