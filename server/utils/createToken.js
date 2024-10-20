import jwt from "jsonwebtoken";

const genrateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "24hr",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_DEV !== "development",
    maxAge: 24 * 60 * 60 * 1000,
  });
};

export default genrateToken;
