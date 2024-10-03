import React from "react";

const Home = () => {
  const services = [
    {
      imgSrc:
        "https://cdna.artstation.com/p/assets/images/images/045/809/650/large/pranab-sharma-2.jpg?1643605285",
      title: "E-Panchayat",
      description:
        "Connect with your community through Digital E-Panchayat. Share your thoughts, problems",
    },
    {
      imgSrc:
        "https://caritasindia.org/GlobalProgramIndia/wp-content/uploads/2022/04/Mock-Gram-Sabha.jpeg",
      title: "Digital Education",
      description: "Access quality education from anywhere in India.",
    },
  ];

  const works = [
    {
      imgSrc:
        "https://www.strategy-business.com/media/image/44106699_1000x500.jpg",
      title: "Digital Marketing",
    },
    {
      imgSrc:
        "https://jungleworks.com/wp-content/uploads/2020/12/shutterstock_700890880.jpg",
      title: "Digital Marketing",
    },
    {
      imgSrc:
        "https://www.crystalblueindia.com/wp-content/uploads/2021/06/fertility_img.jpg",
      title: "Digital Marketing",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 my-10">
          <img
            src="https://panchayat.gov.in/wp-content/themes/sdo-theme/images/emblem.svg"
            alt="Emblem"
          />
        </div>
        <div className="flex gap-10 justify-center items-center">
          <img
            className="h-24"
            src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/01/2023012956.png"
            alt="Panchayat Logo"
          />
          <img
            src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/02/2023021046-e1676007895778.png"
            alt="Government Logo"
          />
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-4xl font-bold leading-normal my-5">
          Welcome to Digital E-Panchayat
        </h1>
        <p className="text-lg leading-normal mb-5">
          Connect with your community through Digital E-Panchayat. Share your
          problem.
        </p>
        <img
          src="https://gpdp.nic.in/resources/welcome/images/slider-1.png"
          alt="Digital E-Panchayat Welcome"
        />
      </div>

      {/* Services Section */}
      <div className="h-[90vh] my-10">
        <h1 className="text-4xl font-bold leading-normal my-5">Our Services</h1>
        <div className="grid grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index}>
              <img src={service.imgSrc} alt={service.title} />
              <h2 className="text-2xl font-bold leading-normal">
                {service.title}
              </h2>
              <p className="text-sm leading-normal">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Section */}
      <div className="h-[95vh] my-10">
        <h1 className="text-4xl font-bold leading-normal my-5">Our Work</h1>
        <div className="grid grid-cols-3 gap-5">
          {works.map((work, index) => (
            <div key={index}>
              <img src={work.imgSrc} alt={work.title} />
              <h2 className="text-lg leading-normal">{work.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
