import { useGetUserByIdQuery } from "../../../redux/api/userApi";

const UserDetails = () => {
  const { data: user } = useGetUserByIdQuery();

  return <div>UserDetails</div>;
};

export default UserDetails;
