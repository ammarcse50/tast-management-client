import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-saira"> 
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
