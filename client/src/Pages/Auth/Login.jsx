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
    <div className="w-full flex items-center gap-5 justify-center h-[87vh]  bg-gray-200 ">
      <div className="w-[40%] flex flex-col  p-5 rounded-3xl bg-gray-100 ">
        <h1 className="text-2xl font-bold my-5">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5 gap-2">
            <label htmlFor="Email" className="text-lg font-medium ">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="border border-black rounded-r-3xl py-2 px-1 w-[80%] "
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email" className="text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="enter password"
              className="border border-black rounded-r-3xl py-2 px-1 w-[80%] "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 my-5 py-2 px-3 rounded-xl text-xl font-medium text-white rounded-x hover:bg-green-700 "
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Login"}
          </button>
        </form>
        <p className="text-lg font-medium">
          Don't have an account?{" "}
          <Link to="/register" className="hover:underline hover:text-green-800">
            Register
          </Link>
        </p>
      </div>
      <div className="w-[40%]   flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold my-5">
          Welcome to Digital E Gram Panchayat
        </h2>
        <img
          src="https://cdn.firstcry.com/education/2022/06/09111646/National-Flag-of-India.jpg"
          alt=""
        />
        <p>
          Connect with your community through Digital E Gram Panchayat. Share
          your thoughts, ideas, and stories.
        </p>
      </div>
    </div>
  );
};

export default Login;
