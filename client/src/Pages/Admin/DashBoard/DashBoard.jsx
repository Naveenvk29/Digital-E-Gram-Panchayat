import AsideBar from "./Component/AsideBar";
import Main from "./Component/main/Main";

const DashBoard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <AsideBar />
      <Main />
    </div>
  );
};

export default DashBoard;
