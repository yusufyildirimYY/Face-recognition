import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="text-center center z-0 ">
      <div className="grid justify-center items-center shadow shadow-cyan-100 bgimg rounded-xl mt-32">
        <p className="text-2xl text-black pt-4">
          This Site will detect faces in your pictures. Give it a try
        </p>
        <div className="flex flex-col justify-center">
          <div className="p-4 w-700 ">
            <input
              placeholder="Paste your image URL here"
              className="text-lg w-3/4 mr-auto ml-auto bimg border-2 p-1 "
              type="text"
              onChange={onInputChange}
            />
            <button
              className="w-1/3 hover:scale-105 duration-300  py-2 px-3 inline-block  m-4 bbg text-2xl"
              onClick={onButtonSubmit}
            >
              Detect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
