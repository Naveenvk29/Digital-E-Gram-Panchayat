import { useGetAllUsersQuery } from "../../../redux/api/userApi";
import { Link, useNavigate } from "react-router-dom";

const AllStaff = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery();

  const staffMembers = data?.filter((user) => user.role === "staff");
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load staff members. Please try again later.</div>;
  }

  if (!staffMembers || staffMembers.length === 0) {
    return <div>No staff found</div>;
  }

  return (
    <div className="max-w-screen-xl h-[70vh] mx-auto">
      <h3
        className="text-2xl font-semibold my-5 hover:underline hover:text-blue-500"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </h3>
      <h1 className="text-3xl font-bold">All Staff</h1>
      <div className="mt-8 flex  gap-6">
        {staffMembers.map((staff) => (
          <div
            key={staff._id}
            className="p-4 border rounded-lg shadow-lg bg-white w-[25%]"
          >
            <h2 className="text-2xl font-semibold">{staff.username}</h2>
            <h2 className="text-xl font-medium my-2">{staff.email}</h2>
            <Link
              to={`/admin/details-staff/${staff._id}`}
              className="text-blue-500 hover:text-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStaff;
