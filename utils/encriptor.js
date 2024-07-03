/* eslint-disable quotes */
/* eslint-disable semi */
import bcrypt from "bcrypt";
import jwonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class Encrypt {
  static async hash (password) {
    return await bcrypt.hash(password, parseInt(process.env.SALT));
  }

  static async compare (password, hash) {
    return await bcrypt.compare(password, hash);
  }

  // generate token from a payload with the information to encrypt
  static async generateJWTToken (payload) {
    return jwonwebtoken.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION || "1h"
    });
  }

  // verify the status token and check its validity
  static async verifyJWTToken (token) {
    return await jwonwebtoken.verify(token, process.env.JWT_SECRET);
  }

  // decode the token
  static async decodeJWTToken (token) {
    return await jwonwebtoken.decode(token);
  }
}

export default Encrypt;
