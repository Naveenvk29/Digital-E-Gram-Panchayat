import { useAddStaffMutation } from "../../../redux/api/userApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddStaff = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [addStaff, { isLoading }] = useAddStaffMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addStaff({ username, email, password, phone, address }).unwrap();
      toast.success("Staff added successfully");
      navigate("/admin/all-staff");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col p-5 rounded-3xl bg-gray-100 my-5">
      <h3
        className="text-2xl font-semibold my-5 hover:underline hover:text-blue-500"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </h3>
      <h1 className="text-2xl text-center font-bold uppercase">Add Staff</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <label htmlFor="username" className="text-lg font-medium">
            Staff name:
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
        <button
          type="submit"
          className={`w-[80%] py-3 px-5 rounded-xl text-white text-lg font-medium bg-blue-500 hover:bg-blue-600 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add Staff"}
        </button>
      </form>
    </div>
  );
};

export default AddStaff;
