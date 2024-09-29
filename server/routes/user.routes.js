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

import {
  authenticated,
  authoriziedAsAdmin,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(registerUser)
  .get(authenticated, authoriziedAsAdmin, getAllusers);

router.route("/login").post(loginUser);

router.route("/id").get(authenticated, authoriziedAsAdmin, getuserById);

router.route("/logout").post(logout);

router
  .route("/profile")
  .get(authenticated, getcurrentuser)
  .put(authenticated, updatedcurrentuser);

export default router;
