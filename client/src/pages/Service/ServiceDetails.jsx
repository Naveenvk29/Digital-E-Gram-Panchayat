import { useGetServiceByIdQuery } from "../../redux/api/services";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import ApplyServiceForm from "../Application/Application";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetServiceByIdQuery(id); // Added error state handling
  const navigate = useNavigate();

  // Loading state
  if (isLoading) {
    return <div className="mt-10 ml-32">Loading service details...</div>;
  }

  // Format the dates (if data is available)
  const formattedCreatedAt = data
    ? format(new Date(data.createdAt), "MMM d, yyyy ")
    : "";
  const formattedUpdatedAt = data
    ? format(new Date(data.updatedAt), "MMM d, yyyy")
    : "";

  return data ? (
    <div className="mt-10 ml-32">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Go Back
      </button>

      <div className=" flex flex-col ">
        <h1 className="text-5xl font-black mb-3">{data.title}</h1>
        <p className="text-lg font-semibold mb-2">{data.description}</p>
        <p className="mb-2">
          <strong>Status:</strong> {data.status}
        </p>
        <p className="mb-2">
          <strong>Created At:</strong> {formattedCreatedAt}
        </p>
        <p className="mb-2">
          <strong>Updated At:</strong> {formattedUpdatedAt}
        </p>
      </div>
      <ApplyServiceForm serviceId={id} />
    </div>
  ) : (
    "isloadng"
  );
};

export default ServiceDetails;
