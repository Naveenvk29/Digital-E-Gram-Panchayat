import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
} from "../../redux/api/userApi";
import { useParams } from "react-router-dom";

const StaffDetils = () => {
  const { data: user } = useGetUserByIdQuery();
  return <div>StaffDetils</div>;
};

export default StaffDetils;
