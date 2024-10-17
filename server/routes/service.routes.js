import express from "express";
import {
  createService,
  getServiceById,
  getServices,
  updateService,
  deleteService,
  getServicesKey,
} from "../controllers/service.controllers.js";
import {
  authenticated,
  authoriziedAsAdmin,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticated, authoriziedAsAdmin, createService)
  .get(getServices); // Get all services or filter by keywords if needed

// This will handle the query parameter "keywords" without needing to define it explicitly in the path
router.route("/search").get(getServicesKey);

router
  .route("/:id")
  .get(authenticated, getServiceById)
  .put(authenticated, authoriziedAsAdmin, updateService)
  .delete(authenticated, authoriziedAsAdmin, deleteService);

export default router;
