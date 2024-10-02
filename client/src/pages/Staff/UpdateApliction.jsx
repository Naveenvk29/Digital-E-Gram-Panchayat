import {
  useUpdateApplicationMutation,
  useDeleteApplicationMutation,
} from "../../redux/api/applicationApi";
import { useState } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const UpdateApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [remark, setRemark] = useState("");
  const [status, setStatus] = useState("");

  const [updateApplicationMutationCall, { isLoading: updateLoading }] =
    useUpdateApplicationMutation();
  const [deleteApplicationMutationCall, { isLoading: deleteLoading }] =
    useDeleteApplicationMutation();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateApplicationMutationCall({
        id,
        remark,
        status,
      }).unwrap();

      toast.success("Application updated successfully!");
      navigate(`/application-status/${id}`);
    } catch (error) {
      console.error("Update error:", error);
      toast.error(
        error?.data?.message ||
          "Failed to update application. Please try again."
      );
    }
  };
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this application?"))
      return;

    try {
      await deleteApplicationMutationCall(id).unwrap();
      toast.success("Application deleted successfully!");
      navigate("/staff/applications");
    } catch (error) {
      toast.error(
        error?.data?.message ||
          "Failed to delete application. Please try again."
      );
    }
  };
  return (
    <div className="max-w-md mx-auto my-24  rounded-lg shadow-lg">
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">Update Application</h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Remark</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              placeholder="Update your remark"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Status</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-600 text-white rounded-lg ${
              updateLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={updateLoading}
          >
            {updateLoading ? "Updating..." : "Update Application"}
          </button>
          <button
            type="button"
            className="w-full py-2 px-4 bg-red-500 text-white rounded-lg"
            onClick={handleDelete}
          >
            {deleteLoading ? "Deleting..." : "Delete Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateApplication;
