import {
  useGetUserByIdQuery,
  useDeleteUserByIdMutation,
} from "../../../redux/api/userApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StaffDetails = () => {
  const { id } = useParams();
  const { data: user } = useGetUserByIdQuery(id);

  const navigate = useNavigate();

  const [deleteUser, { isLoading: deleteLoading }] =
    useDeleteUserByIdMutation();

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      console.log("User deleted successfully!");
      toast.success("User deleted successfully!");
      navigate("/staff/all-staff");
    } catch (error) {
      console.error(error);
      console.log("Failed to delete user");
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Staff Details</h1>
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Name: <span className="font-normal">{user.username}</span>
            </h3>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Email: <span className="font-normal">{user.email}</span>
            </h3>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Phone: <span className="font-normal">{user.phone}</span>
            </h3>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Address: <span className="font-normal">{user.address}</span>
            </h3>
          </div>

          <button
            onClick={handleDelete}
            disabled={deleteLoading}
            className={`w-full py-2 px-4 mt-4 text-white ${
              deleteLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            } rounded-md transition-all duration-300 ease-in-out`}
          >
            {deleteLoading ? "Deleting..." : "Delete User"}
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading user details...</p>
      )}
    </div>
  );
};

export default StaffDetails;
