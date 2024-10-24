import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Register from "./Pages/Auth/Register.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Service/Services.jsx";
import ServiceDetails from "./Pages/Service/ServiceDetails.jsx";

//user
import PrivateRoutes from "./Pages/User/PrivateRoutes.jsx";
import Profile from "./Pages/User/Profile.jsx";
import GetUserApplication from "./Pages/User/GetUserApplication.jsx";

//staff
import StaffRoutes from "./Pages/Staff/StaffRoutes.jsx";
import GetApplication from "./Pages/Staff/GetApplication.jsx";
import ApplicationStatus from "./Pages/Application/AppilcationStatus.jsx";
import UpdateApplication from "./Pages/Staff/UpdateApliction.jsx";

// admin
import AdminRoutes from "./Pages/Admin/AdminRoutes.jsx";
import DashBoard from "./Pages/Admin/DashBoard/DashBoard.jsx";
import AllStaff from "./Pages/Admin/Staff/AllStaff.jsx";
import AddStaff from "./Pages/Admin/Staff/AddStaff.jsx";
import StaffDetils from "./Pages/Admin/Staff/StaffDetils.jsx";
import AllService from "./Pages/Admin/Service/AllService.jsx";
import CreateService from "./Pages/Admin/Service/CreateService.jsx";
import UpdateService from "./Pages/Admin/Service/UpdateService.jsx";
import UserList from "./Pages/Admin/User/UserList.jsx";
import UserDetails from "./Pages/Admin/User/UserDetails.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />

      {/* user */}
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-applications" element={<GetUserApplication />} />
        <Route path="/applications/:id" element={<ApplicationStatus />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
      </Route>

      {/* Staff */}
      <Route path="" element={<StaffRoutes />}>
        <Route path="/staff/applications" element={<GetApplication />} />
        <Route path="/staff/applications/:id" element={<ApplicationStatus />} />
        <Route
          path="/staff/applications/:id/update"
          element={<UpdateApplication />}
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
