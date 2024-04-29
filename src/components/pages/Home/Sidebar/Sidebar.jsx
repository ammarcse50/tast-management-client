import { Link } from "react-router-dom";
import img from "/img.jpg";
import "boxicons";

const Sidebar = () => {
  return (
    <div className="p-10  min-h-screen">
      <div className="avatar  flex justify-center">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="font-bold text-3xl mt-3 text-center">
        <h2>Ammar uddin</h2>
      </div>

      <div className="font-bold mx-7 text-4xl mt-12 ">
      <Link to="/alltask" > <button
       
          className="hover:bg-[#1fc23a] hover:rounded-lg p-3 hover:text-white text-2xl flex items-center justify-center"
        >
          <box-icon name="task" color="#2cae74 "></box-icon>
          All task
        </button></Link> 
        <Link to="completedtask">  <button className="hover:bg-[#1fc23a] hover:rounded-lg p-3 hover:text-white text-2xl flex items-center justify-center">
          <box-icon name="check" color="#2cae74 "></box-icon>
          <span className="text-lg">Completed!</span>
        </button></Link>
        <Link to="/importanttask"> <button className="hover:bg-[#1fc23a] hover:rounded-lg p-3 hover:text-white text-2xl flex items-center justify-center">
          <box-icon name="menu" type="solid" color="#2cae74 "></box-icon>
          <span className="text-lg">important!</span>
        </button></Link>
       
       <Link to="/mustdo"><button className="hover:bg-[#1fc23a] hover:rounded-lg p-3 hover:text-white text-2xl flex items-center justify-center">
          <box-icon name="hand-right" type="solid" color="#2cae74 "></box-icon>
          <span className="text-lg">Do it Now!</span>
        </button></Link>
        
      </div>
    </div>
  );
};

export default Sidebar;
