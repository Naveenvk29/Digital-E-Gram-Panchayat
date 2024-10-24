import { useState } from "react";
import { useCreateApplicationMutation } from "../../redux/api/applicationApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ApplyServiceForm = ({ serviceId }) => {
  const [remark, setRemark] = useState("");
  const [createApplicationMutationCall, { isLoading }] =
    useCreateApplicationMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createApplicationMutationCall({
        serviceId,
        remark,
      }).unwrap();

      toast.success("Application submitted successfully!");
      navigate(`/application-status/${response._id}`);
    } catch (error) {
      //
      const errorMessage =
        error?.data?.message ||
        "Failed to submit application. Please try again.";

      console.error("Failed to submit application:", error);

      if (error?.status === 409) {
        toast.info("You have already applied for this service.");
        // navigate(`/application-status/${}`);
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Apply for Service</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-lg font-medium">Remark</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            placeholder="Enter any remarks"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-600 text-white rounded-lg ${
            isLoading || !remark.trim() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading || !remark.trim()} // Disable the button when loading or if remark is empty
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplyServiceForm;
