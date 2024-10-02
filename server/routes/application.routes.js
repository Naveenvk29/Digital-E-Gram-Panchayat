import express from "express";

import {
  getAllApplications,
  createApplication,
  getApplicationById,
  updateApplication,
  deleteApplication,
} from "../controllers/application.controllers.js";

import {
  authenticated,
  authoriziedAsStaff,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticated, createApplication)
  .get(authenticated, authoriziedAsStaff, getAllApplications);
router
  .route("/:id")
  .put(authenticated, authoriziedAsStaff, updateApplication)
  .get(authenticated, getApplicationById)
  .delete(authenticated, authoriziedAsStaff, deleteApplication);

export default router;
