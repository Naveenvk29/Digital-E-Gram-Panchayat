import { useGetAllApplicationsQuery } from "../../redux/api/applicationApi";
import ApplictionCard from "../../components/ApplictionCard";
const GetApliction = () => {
  const { data, isLoading } = useGetAllApplicationsQuery(); // Added error state handling
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>All Applications</h1>
          {/* Map through the applications and render them */}
          {data?.map((application) => (
            <div key={application.id}>
              <ApplictionCard data={application} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetApliction;
