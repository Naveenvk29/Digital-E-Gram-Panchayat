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
// userRoutes
import PrivateRoutes from "./pages/User/PrivateRoutes.jsx";
import Profile from "./pages/User/Profile.jsx";
import AppilcationStatus from "./pages/Application/AppilcationStatus.jsx";

// staff
import GetApliction from "./pages/Staff/GetApliction.jsx";
import ApplicationID from "./components/ApplicationID.jsx";
import StaffRoutes from "./pages/Staff/StaffRoutes.jsx";
import UpdateApliction from "./pages/Staff/UpdateApliction.jsx";

import DashBoard from "./pages/Admin/DashBoard/DashBoard.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />

      {/* user */}
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profile />} />
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
      <Route path="/admin/dashboard" element={<DashBoard />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
