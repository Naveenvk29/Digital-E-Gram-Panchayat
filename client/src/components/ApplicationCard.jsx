import { Link } from "react-router-dom";

const ApplicationCard = ({ data }) => {
  return (
    <div className="p-5 w-fit border border-gray-300 rounded-lg shadow-lg">
      <p>
        <strong>Application ID:</strong> {data?._id}
      </p>
      <p>
        <strong>Service Title:</strong> {data?.service?.title || "N/A"}
      </p>
      <p>
        <strong>Status:</strong> {data?.status}
      </p>

      <Link
        to={`/staff/applications/${data?._id}`}
        className="text-blue-500 hover:underline mt-3 inline-block"
      >
        View for Info
      </Link>
    </div>
  );
};

export default ApplicationCard;
