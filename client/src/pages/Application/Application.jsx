import { useState } from "react";
import { useCreateApplicationMutation } from "../../redux/api/applicationApi";
import { toast } from "react-toastify";

const ApplyServiceForm = ({ serviceId }) => {
  console.log(serviceId);

  const [remark, setRemark] = useState("");
  const [createApplicationMutationCall, { isLoading }] =
    useCreateApplicationMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createApplicationMutationCall({
        serviceId,
        remark,
      });

      toast.success("Application submitted successfully!");
      setRemark(""); // Reset the form after submission
    } catch (error) {
      console.error("Failed to submit application:", error);
      toast.error("Failed to submit application. Please try again.");
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
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading} // Disable the button when loading
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplyServiceForm;
