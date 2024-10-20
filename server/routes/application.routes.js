import express from "express";

import {
  getAllApplications,
  createApplication,
  getApplicationById,
  updateApplication,
  deleteApplication,
  getApplicationsForUser,
} from "../controllers/application.controllers.js";

import {
  authenticated,
  authoriziedAsStaff,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticated, createApplication)
  .get(authenticated, getAllApplications);
router
  .route("/:id")
  .put(authenticated, updateApplication)
  .get(authenticated, getApplicationById)
  .delete(authenticated, deleteApplication);

router.get("/user-applications", authenticated, getApplicationsForUser);
export default router;
