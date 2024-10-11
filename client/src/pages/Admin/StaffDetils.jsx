import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
} from "../../redux/api/userApi";
import { useParams } from "react-router-dom";

const StaffDetils = () => {
  const { id } = useParams();
  const { data: user } = useGetUserByIdQuery(id);
  console.log(user);
  const [updateUser, { isLoading: updateLoading }] =
    useUpdateUserByIdMutation();
  const [deleteUser, { isLoading: deleteLoading }] =
    useDeleteUserByIdMutation();

  return <div>StaffDetils</div>;
};

export default StaffDetils;
