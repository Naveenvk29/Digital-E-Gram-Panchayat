import { useGetAllApplicationsQuery } from "../../redux/api/applicationApi";
import ApplicationCard from "../../components/ApplicationCard";
import { Link, useNavigate } from "react-router-dom";

const GetApplication = () => {
  const { data, isLoading } = useGetAllApplicationsQuery(); // Added error state handling

  const navigate = useNavigate();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="max-w-screen-xl mx-auto">
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
          <h1 className="text-3xl font-bold my-5">
            All Applications <span>{data.length}</span>
          </h1>
          {/* Map through the applications and render them */}

          {data?.map((application) => (
            <div key={application.id} className="flex flex-wrap my-5 gap-10">
              <ApplicationCard data={application} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetApplication;
