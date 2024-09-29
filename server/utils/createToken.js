import jwt from "jsonwebtoken";

const genrateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "5h",
  });
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 5 * 60 * 1000),
    secure: process.env.NODE_DEV !== "development",
    httpOnly: true,
  });
};

export default genrateToken;
