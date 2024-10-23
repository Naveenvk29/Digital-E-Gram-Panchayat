import { useGetApplicationByIdQuery } from "../../redux/api/applicationApi";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const ApplicationStatus = () => {
  const { id } = useParams();
  const { data } = useGetApplicationByIdQuery(id);
  const navigate = useNavigate();
  console.log(data);

  const formattedSubmittedAt = data?.appliedAt
    ? format(new Date(data.appliedAt), "MMM d, yyyy")
    : "N/A";

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Application Details</h1>

      <div className="p-5 border border-gray-300 rounded-lg">
        <p>
          <strong>Application ID:</strong> {data?._id}
        </p>
        <p>
          <strong>Service Title:</strong> {data?.service?.title || "N/A"}
        </p>
        <p>
          <strong>Status:</strong> {data?.status}
        </p>
        <p>
          <strong>Submitted At:</strong> {formattedSubmittedAt}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-5 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ApplicationStatus;
