import { Link } from "react-router-dom";

const AsideBar = () => {
  return (
    <div className="w-[20%] h-[87.2vh] border-r-2">
      <div className="p-5">
        <h1 className="text-2xl font-bold uppercase underline">Dashboard</h1>
        <ul className="list-none pl-0">
          <li className="py-2 px-4 mt-4 text-xl font-semibold w-full rounded-2xl duration-300  hover:bg-slate-700 hover:text-gray-100">
            <Link to="/admin/add-staff">Add Staff</Link>
          </li>
          <li className="py-2 px-4 mt-4 text-xl font-semibold w-full rounded-2xl duration-300 hover:bg-slate-700 hover:text-gray-100">
            <Link to="/admin/all-staff">All Staff</Link>
          </li>
          <li className="py-2 px-4 mt-4 text-xl font-semibold w-full rounded-2xl duration-300 hover:bg-slate-700 hover:text-gray-100">
            <Link to="/admin/create-service">Create Service</Link>
          </li>
          <li className="py-2 px-4 mt-4 text-xl font-semibold w-full rounded-2xl duration-300 hover:bg-slate-700 hover:text-gray-100">
            <Link to="/admin/all-services">All The Service</Link>
          </li>
          <li className="py-2 px-4 mt-4 text-xl font-semibold w-full rounded-2xl duration-300 hover:bg-slate-700 hover:text-gray-100">
            <Link to="/staff/applications">Get Applictions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsideBar;
