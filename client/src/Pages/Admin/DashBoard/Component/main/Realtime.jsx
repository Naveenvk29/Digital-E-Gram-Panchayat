const Realtime = ({ users }) => {
  const staffUsers = users?.filter((user) => user.role === "staff");
  const numofUser = users?.filter((user) => user.role === "user");

  return (
    <div className="relative w-full max-w-md shadow-xl p-8 bg-gray-50 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Realtime Users
      </h1>

      <div className="text-center mb-6">
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

        <div className="text-lg font-medium text-center">
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
