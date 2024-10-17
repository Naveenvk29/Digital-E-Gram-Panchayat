import Service from "../model/service.model.js";
import asyncHandler from "../utils/asyncHandle.js";

const createService = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  const existingService = await Service.findOne({ title });
  if (existingService) {
    return res
      .status(400)
      .json({ message: "A service with the same title already exists" });
  }

  const newService = await Service.create({
    title,
    description,
  });
  res.status(201).json({
    _id: newService._id,
    title: newService.title,
    description: newService.description,
    status: newService.status,
    createdAt: newService.createdAt,
  });
});

const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find({});
  res.json(services);
});

const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }
  res.json(service);
});

const updateService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const service = await Service.findById(id);

  if (service) {
    if (req.user.role === "admin") {
      service.title = req.body.title || service.title;
      service.description = req.body.description || service.description;
      service.status = req.body.status || service.status;
      await service.save();
      res.json({
        service,
      });
    } else {
      return res
        .status(403)
        .json({ message: "Access denied. You must be an admin" });
    }
  } else {
    return res.status(404).json({ message: "Service not found" });
  }
});

const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const service = await Service.findByIdAndDelete(id);
  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }
  res
    .status(200)
    .json({ message: "Service deleted successfully " + service.title });
});

const getServicesKey = asyncHandler(async (req, res) => {
  const keywords = req.query.keyword;
  const regex = new RegExp(keywords, "i");
  try {
    const services = await Service.find({
      $or: [{ title: regex }, { description: regex }],
    });
    if (services.length == 0) {
      return res.json({ message: "No services found with the keyword." });
    }
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
  getServicesKey,
};
