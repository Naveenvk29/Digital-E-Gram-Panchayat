import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import asynchandler from "../utils/asyncHandle.js";

const authenticated = asynchandler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.error(error.message);
      res.status(401).send("Token is not valid");
    }
  } else {
    res.status(401).send("No token, authorization denied");
  }
});

const authoriziedAsAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).send("Access denied. You must be an admin");
  }
};
const authoriziedAsStaff = (req, res, next) => {
  if (req.user.role !== "staff" && req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Access denied. Staff or Admin only." });
  }
  next();
};

export { authenticated, authoriziedAsAdmin, authoriziedAsStaff };
