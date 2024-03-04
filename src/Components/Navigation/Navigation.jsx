import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className=" flex justify-end  w-full ">
      <div className="w-48 relative ">
        <p
          onClick={() => {
            onRouteChange("signin");
          }}
          className="text-cyan-600  z-20 border-2 border-cyan-600 rounded-full  p-4 m-7 font-bold text-2xl hover:text-white hover:bg-cyan-600 hover:border-cyan-200  ease-in duration-300   cursor-pointer  "
        >
          Sign Out
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
