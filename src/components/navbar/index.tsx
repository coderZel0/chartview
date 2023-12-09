import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-400">
      <div className="flex justify-between p-3 px-8">
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center w-[28px] h-[28px] rounded-[50%] bg-slate-100 mr-4"></div>
          <span className="text-white font-bold">FinTech</span>
        </div>
        <div className="flex px-3 items-center">
          <div className="relative mr-3">
            <div className="">N</div>
            <div className="absolute right-[-5px] top-0 rounded-[50%] bg-yellow-400 w-[8px] h-[8px]"></div>
          </div>
          <div>
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-[50%] bg-slate-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
