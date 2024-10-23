import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Pages/Home/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Home/Footer";

const App = () => {
  return (
    <>
      <ToastContainer />
      <div>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
