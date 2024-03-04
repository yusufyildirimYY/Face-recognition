import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <div class="w-full h-full  flex justify-center items-center ">
      <form className="bg-white shadow-md rounded px-24  py-20 pb-8  bgcolor">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-l font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-l font-bold mb-2"
            for="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-l font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex ">
          <button
            onClick={() => onRouteChange("signin")}
            className=" mx-auto  bg-cyan-500 hover:bg-blue-600 duration-300 text-white font-bold py-3 px-14 rounded focus:outline-none focus:shadow-outline text-2xl "
            type="button"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
