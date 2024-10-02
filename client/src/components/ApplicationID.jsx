import { useGetApplicationByIdQuery } from "../redux/api/applicationApi";
import { useParams, Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const ApplicationID = () => {
  const { id } = useParams();

  const { data } = useGetApplicationByIdQuery(id);

  const navigate = useNavigate();

  const formattedAppliedAt = data?.appliedAt
    ? format(new Date(data.appliedAt), "MMM d, yyyy")
    : "N/A";
  const formattedUdatedAt = data?.updatedAt
    ? format(new Date(data.updatedAt), "MMM d, yyyy")
    : "N/A";

  return (
    <>
      <div className="max-w-screen-md mx-auto">
        <div className="my-5">
          <Link
            className="text-lg font-medium hover:text-blue-500 hover:underline "
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </Link>
        </div>
        <div className="mt-5 flex flex-col items-center">
          <div>
            <h1 className="text-4xl font-bold mr-5">
              Application ID: {data?._id}
            </h1>
            <h2 className="my-5 text-2xl font-semibold">
              <strong>Service Title:</strong>{" "}
              <span className="text-lg font-medium">
                {data?.service?.title || "N/A"}
              </span>
              <p className="text-xl">
                <strong>Remark:</strong>{" "}
                <span className="text-lg font-medium">
                  {data?.remark || "N/A"}
                </span>
              </p>
            </h2>
            <p className="text-lg font-medium">
              <strong>Status:</strong> {data?.status}
            </p>
            <p className="text-lg font-medium">
              <strong>Submitted At:</strong> {formattedAppliedAt}
            </p>
            <p className="text-lg font-medium">
              <strong>Last Updated At:</strong> {formattedUdatedAt}
            </p>
          </div>
          <div>
            <Link to={`/staff/applications/${data?._id}/update`}>Update</Link>
            <Link></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationID;
