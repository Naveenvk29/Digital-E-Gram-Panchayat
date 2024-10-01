import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  getAllusers,
  getuserById,
  getcurrentuser,
  updatedcurrentuser,
  updatedUserById,
  deleteUserById,
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
router.route("/logout").post(logout);

// admin
router
  .route("/user/:id")
  .get(authenticated, authoriziedAsAdmin, getuserById)
  .put(authenticated, authoriziedAsAdmin, updatedUserById)
  .delete(authenticated, authoriziedAsAdmin, deleteUserById);

// user profile routes
router
  .route("/profile")
  .get(authenticated, getcurrentuser)
  .put(authenticated, updatedcurrentuser);

export default router;
