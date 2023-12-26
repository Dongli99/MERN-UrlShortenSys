import jwt from "jsonwebtoken";
import process from "process";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

class TokenService {
  static generateToken(user, res) {
    // generate token and send token to cookies.
    try {
      const token = jwt.sign(
        {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        }
      );
      res.cookie("token", token).json({
        token,
      });
    } catch (err) {
      throw err;
    }
  }
}

export default TokenService;
