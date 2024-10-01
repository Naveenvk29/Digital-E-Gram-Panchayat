import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./pages/Home/Navigation";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <ToastContainer />
      <div>
        <Navigation />
        <Outlet />
      </div>
    </>
  );
};

export default App;
