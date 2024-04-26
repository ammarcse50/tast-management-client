import React from "react";
import img from "/img.jpg";
import "boxicons";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="md:flex">
      <div className="md:w-1/5 border rounded-lg shadow-lg m-5 p-5 ">
        <div className="avatar  flex justify-center">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="font-bold text-3xl mt-3 text-center">
          <h2>Ammar uddin</h2>
        </div>

        <div className="font-bold mx-7 text-4xl mt-12 ">
        


            <button className="hover:bg-[#1fc23a] hover:rounded-lg p-3 hover:text-white text-2xl flex items-center justify-center">
              <box-icon name="task" color="#12eb1c"></box-icon>
              All task
            </button>
            <button className="hover:bg-[#1fc23a] hover:rounded-lg p-3 hover:text-white text-2xl flex items-center justify-center">
            <box-icon name="check" color="#12eb1c"></box-icon>
            <span className="text-lg">Completed!</span>
            </button>
            <button className="hover:bg-[#1fc23a] hover:rounded-lg p-3 hover:text-white text-2xl flex items-center justify-center">
            <box-icon name="menu" type="solid" color="#12eb1c"></box-icon>
            <span className="text-lg">important!</span>
            </button>
            <button className="hover:bg-[#1fc23a] hover:rounded-lg p-3 hover:text-white text-2xl flex items-center justify-center">
            <box-icon name="hand-right" type="solid" color="#12eb1c"></box-icon>
            <span className="text-lg">Do it Now!</span>
            </button>
          

     
    
        </div>
      </div>

      <div className="w-4/5 min-h-screen rounded-lg border shadow-lg m-5 p-3"></div>
    </div>
  );
};

export default Sidebar;
