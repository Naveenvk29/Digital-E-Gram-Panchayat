const Applications = ({ data }) => {
  return (
    <div className="w-full md:w-[45%]">
      <h2 className="text-lg font-medium mb-4">Applications</h2>
      <p className="text-3xl font-extrabold">{data?.length}</p>
    </div>
  );
};

export default Applications;
