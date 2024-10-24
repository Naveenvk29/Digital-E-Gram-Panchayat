import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Setcredentials } from "../../redux/featuces/authSlice";
import { useRegisterMutation } from "../../redux/api/userApi";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await register({
        username,
        email,
        password,
        phone,
        address: { street, city, state, zip },
      }).unwrap();

      dispatch(Setcredentials({ ...res }));
      toast.success("Registration successful");
      navigate("/");
    } catch (error) {
      toast.error("Failed to register");
      console.error(error);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-around gap-10 bg-gray-200 py-10">
      {/* Left Section with Image */}
      <div className="w-full md:w-[40%] flex justify-center items-center flex-col text-center">
        <h2 className="text-3xl font-bold my-5">
          Welcome to Digital E Gram Panchayat
        </h2>
        <img
          src="https://www.alcimed.com/wp-content/uploads/2022/09/agriculture-en-asie.jpg"
          alt="Agriculture"
          className="w-full md:w-[80%] rounded-lg"
        />
        <p className="mt-5 px-5">
          Connect with your community through Digital E Gram Panchayat. Share
          your thoughts, ideas, and contribute to local development.
        </p>
      </div>

      {/* Register Form */}
      <div className="w-full md:w-[40%] flex flex-col p-5 rounded-3xl bg-gray-100 shadow-lg">
        <h1 className="text-2xl text-center font-bold">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-lg font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-black rounded-lg py-2 px-3 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-lg font-medium">
              Mobile Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-black rounded-lg py-2 px-3 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black rounded-lg py-2 px-3 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Address Fields */}
          <div className="mb-5">
            <label htmlFor="address" className="text-lg font-medium">
              Address
            </label>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                placeholder="Street"
                value={street}
                className="border border-black rounded-lg py-2 px-3 w-[47%] focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setStreet(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                className="border border-black rounded-lg py-2 px-3 w-[47%] focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                className="border border-black rounded-lg py-2 px-3 w-[47%] focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setState(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Zip"
                value={zip}
                className="border border-black rounded-lg py-2 px-3 w-[47%] focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black rounded-lg py-2 px-3 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-lg font-medium">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-black rounded-lg py-2 px-3 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white text-lg font-medium bg-blue-500 hover:bg-blue-600 transition-colors ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Register"}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-5 text-lg font-medium">
          <span>Already have an account?</span>
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
