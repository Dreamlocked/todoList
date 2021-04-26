import React from "react";

function Filters() {
  return (
    <div className="flex flex-row justify-center container  mt-[20px]">
      <div className="flex flex-row items-center justify-center w-[88%] h-[50px] bg-white border-gray-200 border-[1px] rounded-md z-10 p-[20px] gap-[25px] text-gray-400 text-[15px] shadow-md dark:bg-gray-800 dark:border-gray-700">
        <span className="cursor-pointer hover:text-blue-800">All</span>
        <span className="cursor-pointer hover:text-blue-800">Active</span>
        <span className="cursor-pointer hover:text-blue-800">Completed</span>
      </div>
    </div>
  );
}

export default Filters;
