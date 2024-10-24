import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/userApi";
import { logout } from "../../redux/featuces/authSlice";
import { toast } from "react-toastify";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
    <nav className="w-full bg-gradient-to-r from-blue-500 to-blue-700 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            Digital E-Panchayat
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-lg font-medium text-white hover:text-blue-200 transition"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium text-white hover:text-blue-200 transition"
          >
            Services
          </Link>

          {userInfo && (
            <Link
              to="/user-applications"
              className="text-lg font-medium text-white hover:text-blue-200 transition"
            >
              Applications
            </Link>
          )}
          {!userInfo && (
            <>
              <Link
                to="/login"
                className="text-lg font-medium text-white hover:text-blue-200 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-lg font-medium text-white hover:text-blue-200 transition"
              >
                Register
              </Link>
            </>
          )}

          {userInfo && (
            <div className="relative">
              <button
                onClick={handleToggleMenu}
                className="flex items-center space-x-1 focus:outline-none text-white"
              >
                <span className="text-lg font-semibold">
                  {userInfo.username}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-black py-2 z-10">
                  {userInfo.role == "staff" && (
                    <Link
                      to="/staff/applications"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                    >
                      Get Applications
                    </Link>
                  )}{" "}
                  {userInfo.role == "admin" && (
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={handleMobileMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links (toggle) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 bg-blue-800 p-4 rounded-lg">
          <Link
            to="/"
            className="text-lg font-medium text-white hover:text-blue-200 transition"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium text-white hover:text-blue-200 transition"
          >
            Services
          </Link>

          {userInfo && (
            <>
              {userInfo.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="text-lg font-medium text-white hover:text-blue-200 transition"
                >
                  Dashboard
                </Link>
              )}
              {userInfo.role === "staff" && (
                <Link
                  to="/staff/applications"
                  className="text-lg font-medium text-white hover:text-blue-200 transition"
                >
                  Get Applications
                </Link>
              )}
              <Link
                to="/user-applications"
                className="text-lg font-medium text-white hover:text-blue-200 transition"
              >
                Applications
              </Link>
              <Link
                to="/profile"
                className="text-lg font-medium text-white hover:text-blue-200 transition"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-lg font-medium text-white text-left hover:text-blue-200 transition"
              >
                Logout
              </button>
            </>
          )}
          {!userInfo && (
            <div className="flex flex-col space-y-4">
              <Link
                to="/login"
                className="text-lg font-medium text-white hover:text-blue-200 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-lg font-medium text-white hover:text-blue-200 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
