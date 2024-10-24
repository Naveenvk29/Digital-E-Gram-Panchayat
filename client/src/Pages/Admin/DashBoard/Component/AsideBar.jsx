import { Link } from "react-router-dom";

const AsideBar = () => {
  return (
    <div className="w-full md:w-[20%] h-auto md:h-[87.2vh] border-b-2 md:border-r-2 bg-gray-100">
      <div className="p-5">
        <h1 className="text-2xl font-bold uppercase underline mb-6">
          Dashboard
        </h1>
        <ul className="list-none pl-0 space-y-4">
          {[
            "All Staff",
            "Add Staff",
            "User List",
            "Create Service",
            "All Services",
          ].map((text, index) => (
            <li
              key={index}
              className="py-2 px-4 text-xl font-semibold w-full rounded-2xl duration-300 hover:bg-slate-700 hover:text-gray-100"
            >
              <Link to={`/admin/${text.toLowerCase().replace(/\s+/g, "-")}`}>
                {text}
              </Link>
            </li>
          ))}
          <li className="py-2 px-4 text-xl font-semibold w-full rounded-2xl duration-300 hover:bg-slate-700 hover:text-gray-100">
            <Link to="/staff/applications">Get Applications</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsideBar;
