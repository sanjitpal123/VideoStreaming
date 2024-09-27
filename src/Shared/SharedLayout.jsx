import Navbar from "../Components/Header/Navbar";
import SideBar from "../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom"; // Important to include Outlet

const SharedCom = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      {/* The Outlet is where the child routes (like /about) will be rendered */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SharedCom;
