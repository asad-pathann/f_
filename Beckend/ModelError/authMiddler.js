import jwt from "jsonwebtoken";
import { User } from "./../Model/UserModlle.js";

export const authHandler = async (req, res, next) => {
  let tokan;
  if (
    req.header.authorization &&
    req.header.authorization.startsWith("Bearer")
  ) {
    try {
      tokan = req.header.authorization.split(" ")[0];
      let decode = jwt.verify(tokan, process.env.JWT_SECRET);
      console.log(decode);

      const user = await User.findById(decode.id);
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(402);
    throw new Error("Session Expaire ");
  }
};
