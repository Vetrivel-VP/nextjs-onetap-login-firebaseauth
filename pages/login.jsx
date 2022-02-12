import React from "react";
import { FcGoogle } from "react-icons/fc";

const login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col border items-center border-gray-300 rounded-sm w-[550px] p-4">
        <div
          className="flex justify-center items-center border border-gray-300 p-2 w-1/2 
                    rounded-full cursor-pointer hover:shadow-md duration-150 ease-in-out"
        >
          <FcGoogle fontSize={30} />
          <p className="text-lg font-semibold ml-4">Sign in with Google</p>
        </div>
      </div>
    </div>
  );
};

export default login;
