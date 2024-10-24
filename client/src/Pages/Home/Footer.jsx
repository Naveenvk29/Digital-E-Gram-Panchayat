const Footer = () => {
  return (
    <div className="bg-cyan-700 p-10 text-teal-50">
      <div className="max-w-screen-xl mx-auto p-5">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <img
              src="https://panchayat.gov.in/wp-content/themes/sdo-theme/images/emblem.svg"
              alt="Government Emblem"
              className="w-16 md:w-20"
            />
          </div>

          {/* Description Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold leading-normal">
              Digital E-Gram Panchayat
            </h2>
            <p className="text-sm md:text-md leading-relaxed mt-2">
              Connect with your community through Digital E-Panchayat. Share
              your thoughts, problems, and solutions for local governance.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="flex flex-col md:flex-row gap-4 text-sm md:text-base">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-teal-300 transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-teal-300 transition duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-teal-300 transition duration-200"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-5 border-gray-300" />

        {/* Copyright Section */}
        <div>
          <p className="text-sm text-center mt-5">
            &copy; {new Date().getFullYear()} Digital E-Gram Panchayat. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
