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
      });

      dispatch(Setcredentials({ ...res }));
      toast.success("Registration successful");
      navigate("/");
    } catch (error) {
      toast.error("Failed to register");
      console.error(error);
    }
  };

  return (
    <div className="w-full flex items-center gap-10 justify-around   bg-gray-200 ">
      <div className="w-[40%] flex justify-center items-center  flex-col">
        <h2 className="text-3xl font-bold my-5">
          Welcome to Digital E Gram Panchayat
        </h2>
        <img
          src="https://www.alcimed.com/wp-content/uploads/2022/09/agriculture-en-asie.jpg"
          alt=""
        />
        <p>
          Connect with your community through Digital E Gram Panchayat. Share
          your thoughts, problems
        </p>
      </div>
      <div className="w-[40%] flex flex-col  p-5 rounded-3xl bg-gray-100 my-5 ">
        <h1 className="text-2xl text-center font-bold">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5 ">
            <label htmlFor="username" className="text-lg font-medium ">
              Username
            </label>
            <input
              type="text"
              placeholder="enter your username"
              value={username}
              className="border border-black rounded-xl p5  py-2 px-1 w-[80%] "
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-5 ">
            <label htmlFor="Email" className="text-lg font-medium ">
              Mobile Number
            </label>
            <input
              type="number"
              placeholder=" enter your mobile number"
              value={phone}
              className="border border-black rounded-xl p5  py-2 px-1 w-[80%] "
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-5 ">
            <label htmlFor="Email" className="text-lg font-medium ">
              Email
            </label>
            <input
              type="email"
              placeholder=" enter your Email"
              value={email}
              className="border border-black rounded-xl p5  py-2 px-1 w-[80%] "
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="text-lg font-medium ">
              Address
            </label>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                placeholder="Street"
                value={street}
                className="border border-black rounded-xl p5  py-2 px-1 w-[40%] "
                onChange={(e) => setStreet(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                className="border border-black rounded-xl p5  py-2 px-1 w-[40%] "
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                className="border border-black rounded-xl p5  py-2 px-1 w-[40%]"
                onChange={(e) => setState(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Zip"
                value={zip}
                className="border border-black rounded-xl p5  py-2 px-1 w-[40%]"
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col mb-5 ">
            <label htmlFor="password" className="text-lg font-medium ">
              password
            </label>
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              className="border border-black rounded-xl p5  py-2 px-1 w-[80%] "
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-5 ">
            <label htmlFor="password" className="text-lg font-medium ">
              confirm password
            </label>
            <input
              type="password"
              placeholder="enter your confirm password"
              value={confirmPassword}
              className="border border-black rounded-xl p5  py-2 px-1 w-[80%] "
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-[80%] py-3 px-5 rounded-xl text-white text-lg font-medium bg-blue-500 hover:bg-blue-600 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            Register
          </button>
        </form>
        <div className="flex items-center gap-2 mt-5 text-lg font-medium">
          <span>Already have an account?</span>
          <Link to="/login" className="hover:underline hover:text-blue-500">
            Login
          </Link>
          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default Register;
