const Services = ({ data }) => {
  return (
    <div className="w-full md:w-[45%]">
      <h1 className="text-lg font-medium mb-4">Services ({data?.length})</h1>
      {data?.map((service) => (
        <div
          key={service._id}
          className="mb-4 p-4 bg-gray-100 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold">{service.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Services;
