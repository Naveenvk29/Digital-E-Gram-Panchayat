import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/userApi";
import { logout } from "../../redux/featuces/authSlice";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutMutationCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutMutationCall();
      dispatch(logout());
      navigate("/login");
      toast.success("Logged out successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to log out");
    }
  };

  return (
    <div className="w-full bg-orange-500 p-2  text-white">
      <div className="flex items-center justify-around ">
        <div className="">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-20" />
            <h1 className="text-white text-2xl tracking-widest leading-7 font-black ml-2">
              Digital <br />
              E-Panchayat
            </h1>
          </Link>
        </div>
        <div className="flex gap-14">
          <Link to="/" className="text-xl font-semibold uppercase">
            Home
          </Link>
          <Link to="/services" className="text-xl font-semibold uppercase">
            services
          </Link>
          <Link to="/about" className="text-xl font-semibold uppercase">
            about
          </Link>
        </div>
        <div className=" relative flex items-center justify-center gap-5">
          <button
            onClick={handleToggleMenu}
            className="flex justify-center items-center focus:outline-none"
          >
            {userInfo ? (
              <h2 className="text-lg font-black tracking-widest">
                {userInfo.username}
              </h2>
            ) : (
              <></>
            )}

            {userInfo && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 ${
                  isMenuOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            )}
          </button>
          {isMenuOpen && userInfo && (
            <div className="absolute top-[2vw] w-[12vw]  right-0  py-4 rounded-lg flex flex-col  bg-orange-700 text-white px-5 hover:bg-orange-600 hover:text-white   ">
              {userInfo?.role === "admin" && (
                <Link className=" flex items-center text-[1.1vw] my-3  ">
                  <h1>admin-dashBord</h1>
                </Link>
              )}
              {userInfo?.role === "staff" && (
                <Link className=" flex items-center text-[1.1vw] my-3  ">
                  <h1>staff-dashBord</h1>
                </Link>
              )}

              <Link
                to="/profile"
                className="flex items-center space-x-1 hover:underline text-[1.1vw] my-1"
              >
                <span>Profile</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 hover:underline text-[1.1vw] my-1 "
              >
                <span>Logout</span>
              </button>
            </div>
          )}
          {!userInfo && (
            <div className="flex gap-10 text-xl font-semibold">
              <Link to="/login" className="hover:underline hover:text-gray-700">
                Login
              </Link>
              <Link
                to="/register"
                className="hover:underline hover:text-gray-700"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
