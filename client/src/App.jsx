import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./pages/Home/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Home/Footer";

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
