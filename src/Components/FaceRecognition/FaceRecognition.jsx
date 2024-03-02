import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className="flex justify-center items-center z-50 ">
      <div className="relative mt-0">
        <div>
          <img
            id="inputimage"
            className="w-700 mb-4 rounded-lg text-opacity-0 z-10"
            src={imageURL}
            alt=""
          />
        </div>
        {box.map((box, index) => (
          <div
            key={index}
            className="bounding-box"
            style={{
              top: box.top,
              left: box.left,
              bottom: box.bottom,
              right: box.right,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
