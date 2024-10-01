import { Link } from "react-router-dom";
import { format } from "date-fns"; // Optional if you're using date-fns

const ServiceCard = ({ data }) => {
  // Format the date to a more readable format
  const formattedDate = format(new Date(data.createdAt), "MMM d, yyyy ");

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold uppercase mb-3">{data.title}</h2>
        <p className="text-gray-700">Status: {data.status}</p>
        <p className="text-gray-600">Created At: {formattedDate}</p>
        <Link
          to={`/services/${data._id}`}
          className="text-blue-500 hover:underline mt-3 inline-block"
        >
          View for Info
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
