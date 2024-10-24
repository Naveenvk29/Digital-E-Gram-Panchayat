import { useState } from "react";
import { useCreateServiceMutation } from "../../../redux/api/services";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateService = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [createServiceMutationCall, { isLoading }] = useCreateServiceMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createServiceMutationCall({ title, description }).unwrap();
      setTitle("");
      setDescription("");
      navigate("/admin/all-services");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create service");
    }
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="my-5">
        <Link
          className="text-lg font-medium hover:text-blue-500 hover:underline"
          to="/admin/all-services"
        >
          Go back
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Create Service</h1>
        <form className="mt-10 shadow-lg p-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500"
              type="text"
              placeholder="Service Title"
              name="title"
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
              name="description"
              placeholder="Service Description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-600 text-white rounded-lg ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Creating Service..." : "Create Service"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
