const Realtime = ({ users }) => {
  // Filter users with the role of 'staff' and 'user'
  const staffUsers = users?.filter((user) => user.role === "staff");
  const numofUser = users?.filter((user) => user.role === "user");

  return (
    <div className="relative w-fit translate-y-[30%] shadow-xl p-8 bg-white rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Realtime Users</h1>

      <div className="mb-6">
        <span className="text-gray-600 text-lg">{users?.length}</span> Total
        Users
      </div>

      <hr className="border-t-2 border-gray-300 mb-6" />

      <div className="flex justify-between gap-10">
        <div className="text-lg font-medium text-center">
          Total Staff
          <span className="ml-2 text-gray-600 text-2xl font-bold">
            {staffUsers?.length}
          </span>
        </div>

        <div className="border-l-2 border-gray-300"></div>

        <div className="text-lg font-medium">
          Total Users
          <span className="ml-2 text-gray-600 text-2xl font-bold">
            {numofUser?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Realtime;
