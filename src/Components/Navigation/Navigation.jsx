import React from "react";

const Navigation = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p className="text-cyan-600  z-20 border-2 border-cyan-600 rounded-full  p-4 m-7 font-bold text-2xl hover:text-white hover:bg-cyan-600 hover:border-cyan-200  ease-in duration-300   cursor-pointer ">
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
