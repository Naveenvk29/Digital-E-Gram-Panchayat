import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  getAllusers,
  getuserById,
  getcurrentuser,
  updatedcurrentuser,
  deleteUserById,
  addStaff,
  getuserApointments,
} from "../controllers/user.controller.js";

import {
  authenticated,
  authoriziedAsAdmin,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(authenticated, getAllusers);

router.route("/login").post(loginUser);
router.route("/logout").post(logout);

// admin
router
  .route("/user/:id")
  .get(authenticated, getuserById)

  .delete(authenticated, deleteUserById);

// user profile routes
router
  .route("/profile")
  .get(authenticated, getcurrentuser)
  .put(authenticated, updatedcurrentuser);

// staff routes

router.route("/staff").post(authenticated, authoriziedAsAdmin, addStaff);

// user appointment routes

router.route("/user").get(authenticated, getuserApointments);

export default router;
