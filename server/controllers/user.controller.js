import User from "../model/user.model.js";
import asyncHandler from "../utils/asyncHandle.js";
import CreateToken from "../utils/createToken.js";
import Applications from "../model/application.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, phone, address } = req.body;

  if (!username || !email || !password || !phone || !address) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "Email already exists",
    });
  }
  const user = new User({
    username,
    email,
    password,
    phone,
    address,
  });
  try {
    await user.save();
    CreateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      phone: user.phone,
      address: user.address,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = await User.findOne({ email });
  if (user) {
    const ismatchPassword = await user.isPasswordIsVaild(password);
    if (ismatchPassword) {
      CreateToken(res, user._id);
      return res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        phone: user.phone,
        address: user.address,
      });
    } else {
      return res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});

const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(),
  });
  res.status(200).json({ message: "Logged out" });
});

const getAllusers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");
  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }
  res.json(users);
});

const getuserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).select("-password");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

const getcurrentuser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

const updatedcurrentuser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.phone = req.body.phone || user.phone;
    user.address = req.body.address || user.address;
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      role: updatedUser.role,
      phone: updatedUser.phone,
      address: updatedUser.address,
    });
  }
});

const deleteUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ message: "User deleted successfully" });
});

const addStaff = asyncHandler(async (req, res) => {
  const { username, email, password, phone, address } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }
  const user = new User({
    username,
    email,
    password,
    phone,
    address,
    role: "staff",
  });

  try {
    await user.save();
    CreateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      phone: user.phone,
      address: user.address,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

const getuserApointments = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId).populate("applications");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user.applications);
});

export {
  registerUser,
  loginUser,
  logout,
  getAllusers,
  getuserById,
  getcurrentuser,
  updatedcurrentuser,
  addStaff,
  deleteUserById,
  getuserApointments,
};
