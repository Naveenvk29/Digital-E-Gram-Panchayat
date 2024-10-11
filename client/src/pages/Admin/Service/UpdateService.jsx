import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useUpdateServiceMutation,
  useGetServiceByIdQuery,
  useDeleteServiceMutation,
} from "../../../redux/api/services"; // Assuming you have this query for fetching by ID
import { toast } from "react-toastify";

const UpdateService = () => {
  const { id } = useParams(); // Get service ID from URL params
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [deleteServiceMutation, { isLoading: deleteLoading }] =
    useDeleteServiceMutation();
  const [updateServiceMutation, { isLoading }] = useUpdateServiceMutation();
  const { data: service, isLoading: serviceLoading } =
    useGetServiceByIdQuery(id);

  useEffect(() => {
    if (service) {
      setTitle(service.title);
      setDescription(service.description);
      setStatus(service.status);
    }
  }, [service]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateServiceMutation({ id, title, description, status }).unwrap();
      toast.success("Service updated successfully!");
      navigate("/admin/all-services");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update service.");
    }
  };
  const handleDelete = async () => {
    try {
      await deleteServiceMutation({ id }).unwrap();
      toast.success("Service deleted successfully!");
      navigate("/admin/all-services");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete service.");
    }
  };

  if (serviceLoading) return <p>Loading service data...</p>;

  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <h1 className="text-2xl font-bold">Update Service</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 h-32"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Status</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">active </option>
            <option value="inactive">inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-600 text-white rounded-lg mb-5 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Service"}
        </button>
        <button
          type="button"
          className="w-full py-2 px-4 bg-red-600 text-white rounded-lg "
          onClick={handleDelete}
          disabled={deleteLoading}
        >
          {deleteLoading ? "Deleting..." : "Delete Service"}
        </button>
      </form>
    </div>
  );
};

export default UpdateService;
