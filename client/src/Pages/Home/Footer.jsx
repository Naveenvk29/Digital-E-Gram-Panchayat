const Footer = () => {
  return (
    <div className="bg-cyan-700 p-10 text-teal-50">
      <div className="max-w-screen-xl mx-auto p-5  ">
        <div className="flex items-center justify-between">
          <div>
            <img
              src="https://panchayat.gov.in/wp-content/themes/sdo-theme/images/emblem.svg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-normal">
              Digital E-Gram Panchayat
            </h2>
            <p className="text-sm leading-normal">
              Connect with your community through Digital E-Panchayat. Share
              your thoughts, problems, and solutions.
            </p>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
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
