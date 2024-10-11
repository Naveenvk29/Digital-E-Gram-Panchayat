import { useGetServicesQuery } from "../../../redux/api/services";
import { Link } from "react-router-dom";

const AllService = () => {
  const { data: services, isLoading, error } = useGetServicesQuery();

  if (isLoading) return <p>Loading services...</p>;
  if (error) return <p>Error fetching services: {error.message}</p>;

  return (
    <div className="max-w-screen-md mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">All Services</h1>
      {services?.map((service) => (
        <div key={service._id} className="mb-6 p-5 border rounded-lg shadow-lg">
          <h2 className="text-2xl  mb-2 font-semibold">{service.title}</h2>
          <p className="text-gray-700 mb-5">{service.description}</p>
          <Link
            to={`/admin/update-service/${service._id}`}
            className="text-blue-600 text-lg font-medium hover:underline"
          >
            Update
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllService;
