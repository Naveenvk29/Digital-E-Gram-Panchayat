// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/userApi";
import { logout } from "../../redux/featuces/authSlice";
import logo from "../../assets/logo.png";

const Navigation = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutMutationCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <Link className="text-xl font-semibold uppercase">Home</Link>
          <Link className="text-xl font-semibold uppercase">services</Link>
          <Link className="text-xl font-semibold uppercase">about</Link>
        </div>
        <div className="">
          {userInfo && (
            <button
              onClick={async () => {
                await logoutMutationCall();
                dispatch(logout());
                navigate("/");
              }}
            >
              Logout
            </button>
          )}

          {userInfo?.role === "admin" && <Link>Admin</Link>}
          {userInfo?.role === "staff" && <Link>Staff</Link>}
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
