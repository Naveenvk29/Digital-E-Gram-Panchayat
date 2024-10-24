import Applications from "../model/application.model.js";
import Service from "../model/service.model.js";
import asyncHandler from "../utils/asyncHandle.js";
import User from "../model/user.model.js";

const getAllApplications = asyncHandler(async (req, res) => {
  const applications = await Applications.find().populate("service", "title");
  res.json(applications);
});

const createApplication = asyncHandler(async (req, res) => {
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
  service.applications.push(application._id);
  await service.save();

  await User.findByIdAndUpdate(userId, {
    $push: { applications: application._id },
  });

  try {
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

const getApplicationById = asyncHandler(async (req, res) => {
  const application = await Applications.findById(req.params.id).populate(
    "service",
    "title"
  );
  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }
  res.json(application);
});

const updateApplication = asyncHandler(async (req, res) => {
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

const deleteApplication = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const application = await Applications.findByIdAndDelete(id);

  const service = await Service.findById(application.service);
  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }

  if (service) {
    service.applications = service.applications.filter(
      (app) => app.toString() !== id
    );
    await service.save();
  }

  res.json({ message: "Application deleted successfully" });
});
const getApplicationsForUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const applications = await Applications.find({ user: userId }).populate(
    "service",
    "title"
  );

  if (!applications) {
    return res
      .status(404)
      .json({ message: "No applications found for this user" });
  }

  res.json(applications);
});

export {
  getAllApplications,
  createApplication,
  getApplicationById,
  updateApplication,
  deleteApplication,
  getApplicationsForUser,
};
