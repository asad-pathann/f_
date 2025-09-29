// import jwt from "jsonwebtoken";
// import { User } from "./../Model/UserModlle.js";

// export const authHandler = async (req, res, next) => {
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       const token = req.headers.authorization.split(" ")[1];

//       // verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       console.log("Decoded ID:", decoded?.id);

//       // find user from DB
//       const user = await User.findById(decoded.id).select("-password");
//       if (!user) {
//         return res.status(401).json({ error: "User not found in DB" });
//       }

//       // attach user globally to request
//       req.user = user;
//       next();
//     } catch (error) {
//       console.error("Auth error:", error.message);
//       return res
//         .status(401)
//         .json({ error: "Not authorized, token invalid or expired" });
//     }
//   } else {
//     return res.status(401).json({ error: "No token provided" });
//   }
// };

import jwt, { decode } from "jsonwebtoken";
import { User } from "../Model/UserModlle.js";

export const authHandler = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      let deccode = await jwt.verify(token, process.env.JWT_SECRET);

      let user = await User.findById(decode?.id);
      console.log(user);
      req.user = user;
      next();
    } catch (error) {
      res.status(404);
      throw new Error("User Not Found !");
    }
  } else {
    res.status(404);
    throw new Error("Invilde Token ");
  }
};
