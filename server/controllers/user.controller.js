import User from "../model/user.model.js";
import asyncHandler from "../utils/asyncHandle.js";
import CreateToken from "../utils/createToken.js";

const registerUser = asyncHandler(async (req, res) => {});

const loginUser = asyncHandler(async (req, res) => {});

const logout = asyncHandler(async (req, res) => {});

const getAllusers = asyncHandler(async (req, res) => {});

const getuserById = asyncHandler(async (req, res) => {});

const getcurrentuser = asyncHandler(async (req, res) => {});

const updatedcurrentuser = asyncHandler(async (req, res) => {});

export {
  registerUser,
  loginUser,
  logout,
  getAllusers,
  getuserById,
  getcurrentuser,
  updatedcurrentuser,
};
