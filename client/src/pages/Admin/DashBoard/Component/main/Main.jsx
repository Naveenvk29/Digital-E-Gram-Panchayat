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
    <div className="max-w-screen-xl mx-auto">
      <div>
        <Realtime users={users} />
      </div>
      <div className="mt-32 flex gap-32  ">
        <Services data={services} />
        <Applications data={applications} />
      </div>
    </div>
  );
};

export default Main;
