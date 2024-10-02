import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminRoutes;
