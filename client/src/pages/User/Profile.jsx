import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Setcredentials } from "../../redux/featuces/authSlice";
import { useUpdateCurrentUserProfileMutation } from "../../redux/api/userApi"; // Corrected function name
import { toast } from "react-toastify";
// import Loader from "../../components/Loader";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [updateUser, { isLoading }] = useUpdateCurrentUserProfileMutation(); // Corrected hook name

  useEffect(() => {
    if (userInfo) {
      setUsername(userInfo.username);
      setEmail(userInfo.email);
      setPhone(userInfo.phone);
      setAddress(userInfo.address);
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await updateUser({
        username,
        email,
        password,
        phone,
        address,
      }).unwrap();
      console.log(res);

      toast.success("Profile updated successfully");
      dispatch(Setcredentials({ ...res }));
    } catch (error) {
      console.error("Failed to update profile:", error);
      const errorMessage =
        error?.data || "Failed to update profile. Please try again.";
      toast.error(errorMessage);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col p-5 rounded-3xl bg-gray-100 my-5">
      <h1 className="text-2xl text-center font-bold uppercase">
        Update Profile
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <label htmlFor="username" className="text-lg font-medium">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            className="border border-black rounded-xl p-5 py-2 px-1 w-[80%]"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="phone" className="text-lg font-medium">
            Mobile Number
          </label>
          <input
            type="number"
            placeholder="Enter your mobile number"
            value={phone}
            className="border border-black rounded-xl p-5 py-2 px-1 w-[80%]"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            className="border border-black rounded-xl p-5 py-2 px-1 w-[80%]"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="password" className="text-lg font-medium">
            Address
          </label>
          <textarea
            placeholder="Enter your address"
            value={address}
            className="border border-black rounded-xl p-5 py-2 px-1 w-[80%]"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="password" className="text-lg font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            className="border border-black rounded-xl p-5 py-2 px-1 w-[80%]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="confirmPassword" className="text-lg font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Enter your confirm password"
            value={confirmPassword}
            className="border border-black rounded-xl p-5 py-2 px-1 w-[80%]"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={`w-[80%] py-3 px-5 rounded-xl text-white text-lg font-medium bg-blue-500 hover:bg-blue-600 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
