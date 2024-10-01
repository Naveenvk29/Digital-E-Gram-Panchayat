import { useGetStatusForUserQuery } from "../../redux/api/applicationApi";

const AppilcationStatus = () => {
  const { data, isLoading, error } = useGetStatusForUserQuery();
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading application status</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Your Application Status</h1>
      {data?.length === 0 ? (
        <p>No applications found</p>
      ) : (
        <ul className="space-y-4">
          {data.map((application) => (
            <li
              key={application._id}
              className="p-4 border border-gray-300 rounded-lg"
            >
              <h2 className="text-lg font-semibold">
                {application.service.title}
              </h2>
              <p>Status: {application.status}</p>
              <p>Remark: {application.remark || "N/A"}</p>
              <p>
                {/* Applied At: {new Date(application.createdAt).toLocaleString()} */}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppilcationStatus;
