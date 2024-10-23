import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// public
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Services from "./pages/Service/Services.jsx";
import ServiceDetails from "./pages/Service/ServiceDetails.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About.jsx";
// userRoutes
import PrivateRoutes from "./pages/User/PrivateRoutes.jsx";
import Profile from "./pages/User/Profile.jsx";
import AppilcationStatus from "./pages/Application/AppilcationStatus.jsx";
import GetUserApplication from "./pages/User/GetUserApplication.jsx";

// staff routes
import GetApliction from "./pages/Staff/GetApliction.jsx";
import ApplicationID from "./components/ApplicationID.jsx";
import StaffRoutes from "./pages/Staff/StaffRoutes.jsx";
import UpdateApliction from "./pages/Staff/UpdateApliction.jsx";

// Admin routes
import AdminRoutes from "./pages/Admin/AdminRoutes.jsx";
import DashBoard from "./pages/Admin/DashBoard/DashBoard.jsx";
import AllStaff from "./pages/Admin/Staff/AllStaff.jsx";
import AddStaff from "./pages/Admin/Staff/AddStaff.jsx";
import StaffDetils from "./pages/Admin/Staff/StaffDetils.jsx";
import AllService from "./pages/Admin/Service/AllService.jsx";
import CreateService from "./pages/Admin/Service/CreateService.jsx";
import UpdateService from "./pages/Admin/Service/UpdateService.jsx";
import UserList from "./pages/Admin/User/UserList.jsx";
import UserDetails from "./pages/Admin/User/UserDetails.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />

      {/* user */}
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-applications" element={<GetUserApplication />} />
        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/application-status/:id" element={<AppilcationStatus />} />
      </Route>

      {/* staff */}
      <Route path="" element={<StaffRoutes />}>
        <Route path="/staff/applications" element={<GetApliction />} />
        <Route path="/staff/applications/:id" element={<ApplicationID />} />
        <Route
          path="/staff/applications/:id/update"
          element={<UpdateApliction />}
        />
      </Route>

      {/* admin */}
      <Route path="" element={<AdminRoutes />}>
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/user-list" element={<UserList />} />
        <Route path="/admin/user-details/:id" element={<UserDetails />} />

        <Route path="/admin/all-staff" element={<AllStaff />} />
        <Route path="/admin/details-staff/:id" element={<StaffDetils />} />
        <Route path="/admin/add-staff" element={<AddStaff />} />
        <Route path="/admin/create-service" element={<CreateService />} />
        <Route path="/admin/update-service/:id" element={<UpdateService />} />
        <Route path="/admin/all-services" element={<AllService />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
