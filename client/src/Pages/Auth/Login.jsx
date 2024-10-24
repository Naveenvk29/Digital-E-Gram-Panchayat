import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Setcredentials } from "../../redux/featuces/authSlice";
import { useLoginMutation } from "../../redux/api/userApi";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(Setcredentials({ ...res }));
      navigate("/");
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error(error.message);
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="w-full  flex flex-col md:flex-row items-center justify-center  bg-gray-200 p-5">
      {/* Login Form Section */}
      <div className="w-full md:w-[40%] flex flex-col p-5 rounded-3xl bg-gray-100 my-14 shadow-lg">
        <h1 className="text-2xl font-bold my-5 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              className="border border-black rounded-lg py-2 px-3 mt-1 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
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
              className="border border-black rounded-lg py-2 px-3 mt-1 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 py-3 rounded-lg text-xl font-medium text-white hover:bg-green-600 transition-colors disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Login"}
          </button>
        </form>
        <p className="text-center text-lg font-medium mt-5">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Register
          </Link>
        </p>
      </div>

      {/* Welcome Section */}
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center mt-10 md:mt-0 md:ml-10">
        <h2 className="text-3xl font-bold mb-5 text-center">
          Welcome to Digital E Gram Panchayat
        </h2>
        <img
          src="https://cdn.firstcry.com/education/2022/06/09111646/National-Flag-of-India.jpg"
          alt="Indian Flag"
          className="w-full md:w-[80%] rounded-lg shadow-lg"
        />
        <p className="text-center mt-5 text-lg px-5">
          Connect with your community through Digital E Gram Panchayat. Share
          your thoughts, ideas, and stories to improve your locality.
        </p>
      </div>
    </div>
  );
};

export default Login;
