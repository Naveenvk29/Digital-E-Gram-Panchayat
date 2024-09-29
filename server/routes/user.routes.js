import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  getAllusers,
  getuserById,
  getcurrentuser,
  updatedcurrentuser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").post(registerUser).get(getAllusers);

router.route("/login").post(loginUser);

router.route("/id").get(getuserById);

router.route("/logout").post(logout);

router.route("/profile").get(getcurrentuser).put(updatedcurrentuser);

export default router;
