/* eslint-disable quotes */
/* eslint-disable semi */
import Encrypt from "./../utils/encriptor.js";

const SessionValidator = async (req, res, next) => {
  const token = req.cookies.access_token;
  let data = null;
  req.session = { user: null };
  try {
    data = await Encrypt.decodeJWTToken(token);
    req.session.user = data;
  } catch (error) {
    console.log(error);
    req.session.user = null;
  }
  next();
};
export default SessionValidator;
