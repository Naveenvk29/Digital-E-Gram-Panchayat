import { useEffect, useState } from "react";
import {
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
} from "../../redux/api/userApi";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const [updateUserByIdMutationCall, { isLoading: updateLoading }] =
    useUpdateUserByIdMutation();
  const [deleteUserByIdMutationCall, { isLoading: deleteLoading }] =
    useDeleteUserByIdMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserByIdMutationCall({ id, role }).unwrap();
      toast.success("User role updated successfully!");
      navigate("/admin/all-staff");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user role");
    }
  };

  // Handle user deletion
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUserByIdMutationCall(id).unwrap(); // Call delete mutation with the user ID
        toast.success("User deleted successfully!");
        navigate("/admin/users"); // Navigate after deletion
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete user");
      }
    }
  };

  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <h1 className="text-2xl font-bold">Update User Role</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Role
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-600 text-white rounded-lg ${
            updateLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={updateLoading}
        >
          {updateLoading ? "Updating Role..." : "Update Role"}
        </button>
      </form>

      <button
        onClick={handleDelete}
        className={`w-full py-2 px-4 mt-5 bg-red-600 text-white rounded-lg ${
          deleteLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={deleteLoading}
      >
        {deleteLoading ? "Deleting..." : "Delete User"}
      </button>
    </div>
  );
};

export default AddStaff;
