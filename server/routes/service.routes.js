import express from "express";
import {
  createService,
  getServiceById,
  getServices,
  updateService,
  deleteService,
} from "../controllers/service.controllers.js";
import {
  authenticated,
  authoriziedAsAdmin,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticated, authoriziedAsAdmin, createService)
  .get(getServices);

router
  .route("/:id")
  .get(authenticated, getServiceById)
  .put(authenticated, authoriziedAsAdmin, updateService)
  .delete(authenticated, authoriziedAsAdmin, deleteService);

export default router;
