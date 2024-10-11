import { useGetAllUsersQuery } from "../../../redux/api/userApi";
import { Link } from "react-router-dom";

const UserList = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery();

  const users = data?.filter((user) => user.role === "user");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load staff members. Please try again later.</div>;
  }

  if (!users || users.length === 0) {
    return <div>No User found</div>;
  }

  return (
    <div className="max-w-screen-xl h-[70vh] mx-auto">
      <h1 className="text-3xl font-bold">All Staff</h1>
      <div className="mt-8 flex  gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="p-4 border rounded-lg shadow-lg bg-white w-[25%]"
          >
            <h2 className="text-2xl font-semibold">{user.username}</h2>
            <h2 className="text-xl font-medium my-2">{user.email}</h2>
            <Link
              to={`/admin/user-details/${user._id}`}
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

export default UserList;
