import React from "react";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <div className="m-4 mt-0 inline-block">
      <Tilt tiltReverse:false>
        <div className="w-40 h-40  bg-gradient-to-tr from-cyan-200 to-white flex justify-center items-center">
          <p className="text-9xl">🗿</p>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
