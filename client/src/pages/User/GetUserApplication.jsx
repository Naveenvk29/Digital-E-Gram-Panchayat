import { useGetUserApplicationQuery } from "../../redux/api/userApi";
import ApplictionCard from "../../components/ApplictionCard";
const GetUserApplication = () => {
  const { data: applications } = useGetUserApplicationQuery();
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mt-4">
        My Application
      </h2>
      <div className="mt-4 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {applications?.map((appointment) => (
          <ApplictionCard key={appointment._id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default GetUserApplication;
