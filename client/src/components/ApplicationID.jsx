import { useGetApplicationByIdQuery } from "../redux/api/applicationApi";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
const ApplicationID = () => {
  const { id } = useParams();

  const { data } = useGetApplicationByIdQuery(id);

  console.log(data);
  const formattedAppliedAt = data?.appliedAt
    ? format(new Date(data.appliedAt), "MMM d, yyyy")
    : "N/A";
  const formattedUdatedAt = data?.updatedAt
    ? format(new Date(data.updatedAt), "MMM d, yyyy")
    : "N/A";

  return (
    <div>
      <h1>Application ID: {data?._id}</h1>
      <p>
        <strong>Service Title:</strong> {data?.service?.title || "N/A"}
        <p>
          <strong>Remark:</strong> {data?.remark || "N/A"}
        </p>
      </p>
      <p>
        <strong>Status:</strong> {data?.status}
      </p>
      <p>
        <strong>Submitted At:</strong> {formattedAppliedAt}
      </p>
      <p>
        <strong>Last Updated At:</strong> {formattedUdatedAt}
      </p>
    </div>
  );
};

export default ApplicationID;
