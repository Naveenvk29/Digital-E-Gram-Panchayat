import { useGetServicesQuery } from "../../redux/api/services";
import Loader from "../../components/Loader";
import ServiceCard from "./ServiceCard";
// import
const Services = () => {
  const { data: services } = useGetServicesQuery();

  return services ? (
    <div className="max-w-screen-xl  h-[70vh] mx-auto">
      <div className="flex">
        {services &&
          services.map((service) => (
            <ServiceCard key={service._id} data={service} />
          ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Services;
