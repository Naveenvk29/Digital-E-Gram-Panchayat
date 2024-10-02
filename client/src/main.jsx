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
// userRoutes
import PrivateRoutes from "./pages/User/PrivateRoutes.jsx";
import Profile from "./pages/User/Profile.jsx";
import AppilcationStatus from "./pages/Application/AppilcationStatus.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />

      {/* user */}
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/application-status/:id" element={<AppilcationStatus />} />
      </Route>

      {/* Add more routes */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
