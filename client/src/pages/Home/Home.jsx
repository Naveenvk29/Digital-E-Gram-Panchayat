import React from "react";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <img
            src="https://panchayat.gov.in/wp-content/themes/sdo-theme/images/emblem.svg"
            alt=""
          />
          {/* <h1 className="text-3xl font-bold leading-normal">
            Digital E-Panchayat
          </h1> */}
        </div>
        <div className="flex gap-10 justify-center items-center">
          <img
            className="h-24"
            src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/01/2023012956.png"
            alt=""
          />
          <img
            src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/02/2023021046-e1676007895778.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold leading-normal my-5">
          Welcome to Digital E-Panchayat
        </h1>
        <p className="text-lg leading-normal mb-5">
          Connect with your community through Digital E-Panchayat. Share your
          problem
        </p>
        <img
          src="https://gpdp.nic.in/resources/welcome/images/slider-1.png"
          alt=""
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold leading-normal my-5">Our Services</h1>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <img
              src="https://gpdp.nic.in/resources/welcome/images/icon-1.png"
              alt=""
            />
            <h2 className="text-lg leading-normal">E-Panchayat</h2>
            <p className="text-sm leading-normal">
              Connect with your community through Digital E-Panchayat. Share
              your thoughts, problems
            </p>
          </div>
          <div>
            <img
              src="https://gpdp.nic.in/resources/welcome/images/icon-2.png"
              alt=""
            />
            <h2 className="text-lg leading-normal">Digital Education</h2>
            <p className="text-sm leading-normal">
              Access quality education from anywhere in India.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold leading-normal my-5">Our Work</h1>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <img
              src="https://gpdp.nic.in/resources/welcome/images/work-1.png"
              alt=""
            />
            <h2 className="text-lg leading-normal">Community Engagement</h2>
            <p className="text-sm leading-normal">
              Strengthen community connections and build trust.
            </p>
          </div>
          <div>
            <img
              src="https://gpdp.nic.in/resources/welcome/images/work-2.png"
              alt=""
            />
            <h2 className="text-lg leading-normal">Digital Marketing</h2>
            <p className="text-sm leading-normal">
              Enhance online presence and engagement.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Explore More
          </button>
          <img
            className="h-40"
            src="https://gpdp.nic.in/resources/welcome/images/illustration-2.png"
            alt=""
          />
          <img
            className="h-40"
            src="https://gpdp.nic.in/resources/welcome/images/illustration-3.png"
            alt=""
          />
          <img
            className="h-40"
            src="https://gpdp.nic.in/resources/welcome/images/illustration-4.png"
            alt=""
          />
          <img
            className="h-40"
            src="https://gpdp.nic.in/resources/welcome/images/illustration-5.png"
            alt=""
          />
          <img
            className="h-40"
            src="https://gpdp.nic.in/resources/welcome/images/illustration-6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
