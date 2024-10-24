const Home = () => {
  const services = [
    {
      imgSrc:
        "https://cdna.artstation.com/p/assets/images/images/045/809/650/large/pranab-sharma-2.jpg?1643605285",
      title: "E-Panchayat",
      description:
        "Connect with your community through Digital E-Panchayat. Share your thoughts, problems, and engage in meaningful discussions with local governance.",
    },
    {
      imgSrc:
        "https://caritasindia.org/GlobalProgramIndia/wp-content/uploads/2022/04/Mock-Gram-Sabha.jpeg",
      title: "Digital Education",
      description:
        "Access quality education from anywhere in India with our digital platform tailored for every learner.",
    },
  ];

  const works = [
    {
      imgSrc:
        "https://www.strategy-business.com/media/image/44106699_1000x500.jpg",
      title: "Digital Transformation",
    },
    {
      imgSrc:
        "https://jungleworks.com/wp-content/uploads/2020/12/shutterstock_700890880.jpg",
      title: "Smart Governance",
    },
    {
      imgSrc:
        "https://www.crystalblueindia.com/wp-content/uploads/2021/06/fertility_img.jpg",
      title: "Agricultural Support",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      {/* Logo and Header Section */}
      <div className="flex flex-wrap justify-between items-center my-8">
        <div className="flex items-center gap-5">
          <img
            src="https://panchayat.gov.in/wp-content/themes/sdo-theme/images/emblem.svg"
            alt="Government Emblem"
            className="w-16"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700">
            Digital E-Panchayat
          </h1>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <img
            className="h-16 md:h-24"
            src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/01/2023012956.png"
            alt="Panchayat Logo"
          />
          <img
            className="h-16 md:h-24"
            src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/02/2023021046-e1676007895778.png"
            alt="Government Logo"
          />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="my-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold my-5 text-blue-900">
          Welcome to Digital E-Panchayat
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
          Connect with your community through Digital E-Panchayat. Share your
          thoughts, problems, and engage in meaningful conversations with local
          governance.
        </p>
        <img
          src="https://gpdp.nic.in/resources/welcome/images/slider-1.png"
          alt="Digital E-Panchayat Welcome"
          className="w-full h-auto object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Services Section */}
      <div className="my-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-40 md:h-64 object-cover rounded-md mb-5"
              />
              <h2 className="text-2xl font-bold text-blue-800">
                {service.title}
              </h2>
              <p className="text-md text-gray-700 mt-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Section */}
      <div className="my-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
          Our Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={work.imgSrc}
                alt={work.title}
                className="w-full h-40 md:h-48 object-cover rounded-md mb-5"
              />
              <h2 className="text-xl font-bold text-blue-800">{work.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
