import AsideBar from "./Component/AsideBar";
import Main from "./Component/main/Main";
const DashBoard = () => {
  return (
    <div className="flex">
      <AsideBar />
      <Main />
    </div>
  );
};

export default DashBoard;
