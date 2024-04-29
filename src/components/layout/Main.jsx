import { Outlet } from "react-router-dom";
 
import Sidebar from "../pages/Home/Sidebar/Sidebar"
const Main = () => {
  return (
    <div className="font-saira md:flex ">
      <div className="border w- mx-auto">
        {" "}
        <Sidebar></Sidebar>
      </div>

      <div className="border"> 
        {" "}
        <Outlet></Outlet>
       
      </div>
    </div>
  );
};

export default Main;
