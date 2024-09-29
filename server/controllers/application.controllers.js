import Applications from "../model/application.model.js";
import Service from "../model/service.model.js";
import asynchandler from "../utils/asyncHandle.js";
import asynchnadler from "../utils/asyncHandle.js";

const getAllApplications = asynchnadler(async (req, res) => {
  // if (req.user.role !== "admin" && req.user.role !== "staff") {
  //   return res
  //     .status(403)
  //     .json({ message: "Access denied. You must be an admin or staff" });
  // }
  const applications = await Applications.find().populate("service", "title");
  res.json(applications);
});

const createApplication = asynchandler(async (req, res) => {
  const { serviceId, remark } = req.body;
  const userId = req.user._id;

  const service = await Service.findById(serviceId);
  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }
  const existingAppliction = await Applications.findOne({
    user: userId,
    service: serviceId,
  });

  if (existingAppliction) {
    return res
      .status(409)
      .json({ message: "You have already applied for this service" });
  }

  const application = new Applications({
    user: userId,
    service: serviceId,
    remark,
  });
  try {
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

const getApplicationById = asynchandler(async (req, res) => {
  const application = await Applications.findById(req.params.id).populate(
    "service",
    "title"
  );
  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }
  res.json(application);
});

const updateApplication = asynchandler(async (req, res) => {
  const { id } = req.params;
  const { status, remarks } = req.body;

  const application = await Applications.findById(id);
  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }

  application.status = status || application.status;
  application.remarks = remarks || application.remarks;
  application.updatedAt = Date.now();
  await application.save();

  res.status(200).json(application);
});

const deleteApplication = asynchandler(async (req, res) => {
  const { id } = req.params;
  const application = await Applications.findByIdAndDelete(id);
  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }
  res.json({ message: "Application deleted successfully" });
});

export {
  getAllApplications,
  createApplication,
  getApplicationById,
  updateApplication,
  deleteApplication,
};
