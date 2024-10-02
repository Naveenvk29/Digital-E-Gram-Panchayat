const Services = ({ data }) => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-2">Services ({data?.length}) </h1>
      {data?.map((service) => (
        <div key={service._id}>
          <h2 className="mb-2">{service.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Services;
