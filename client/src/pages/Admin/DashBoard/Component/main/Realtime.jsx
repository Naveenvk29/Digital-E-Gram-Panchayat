const Realtime = ({ users }) => {
  // Filter users with the role of 'staff'
  const staffUsers = users?.filter((user) => user.role === "staff");
  const numofUser = users?.filter((user) => user.role === "user");

  return (
    <div className=" relative w-fit  translate-y-[30%] shadow-xl p-16">
      <div className="">
        <h1 className="text-2xl font-semibold ">Realtime Users</h1>
        <br />
        <div>
          <span className="ml-2 text-gray-600">{users?.length}</span> User
        </div>
        <hr />
        <div className="flex  gap-10">
          <div className="mt-5 text-lg font-medium ">
            Total of staff
            <span className="ml-2 text-gray-600 text-2xl font-bold">
              {staffUsers?.length}
            </span>
          </div>
          <div className="border-2 border-black mt-2 "></div>
          <div className="mt-5 text-lg font-medium ">
            Total of users
            <span className="ml-2 text-gray-600 text-2xl font-bold ">
              {numofUser?.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realtime;
