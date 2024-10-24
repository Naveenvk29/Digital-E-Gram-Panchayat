import { useGetAllUsersQuery } from "../../../../../redux/api/userApi";
import { useGetServicesQuery } from "../../../../../redux/api/services";
import { useGetAllApplicationsQuery } from "../../../../../redux/api/applicationApi";
import Realtime from "./Realtime";
import Services from "./Services";
import Applications from "./Applications";

const Main = () => {
  const { data: users } = useGetAllUsersQuery();
  const { data: services } = useGetServicesQuery();
  const { data: applications } = useGetAllApplicationsQuery();

  return (
    <div className="w-full p-4 md:p-8 lg:p-12 bg-white">
      <div className="flex justify-center">
        <Realtime users={users} />
      </div>
      <div className="mt-16 md:mt-32 flex flex-col md:flex-row gap-10 md:gap-32 justify-between">
        <Services data={services} />
        <Applications data={applications} />
      </div>
    </div>
  );
};

export default Main;
