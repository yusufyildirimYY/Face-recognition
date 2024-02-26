import React from "react";
import Tilt from "react-parallax-tilt";
import FaceLogo from "./FaceLogo.png";

const Logo = () => {
  return (
    <div className="m-4 mt-0 inline-block hover:scale-110 duration-300  absolute top-3 z-10 ">
      <Tilt tiltReverse:false>
        <div className="w-40 h-40  bg-gradient-to-tr from-cyan-200 to-white flex justify-center items-center rounded-xl ">
          <p className="p-2">
            <img src={FaceLogo} alt="Logo" />
          </p>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
