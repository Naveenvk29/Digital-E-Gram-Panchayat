import { useGetUserApplicationQuery } from "../../redux/api/userApi";
import ApplicationCard from "../../components/ApplicationCard";
import Loader from "../../components/Loader"; // Assuming you have a Loader component for showing loading state
import { toast } from "react-toastify";

const GetUserApplication = () => {
  const {
    data: applications,
    isLoading,
    isError,
    error,
  } = useGetUserApplicationQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (isError) {
    toast.error(`Error: ${error?.data?.message || error.message}`);
    return (
      <div className="text-center text-red-500">
        <h2 className="text-2xl font-bold">Failed to load applications.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mt-4">
        My Applications
      </h2>
      {applications?.length > 0 ? (
        <div className="mt-4 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {applications.map((application) => (
            <ApplicationCard key={application._id} application={application} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-gray-700">
            No applications found.
          </h3>
        </div>
      )}
    </div>
  );
};

export default GetUserApplication;
