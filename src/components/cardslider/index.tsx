import React from "react";
import Card from "../card";

const CardSlider = () => {
  return (
    <div className="flex flex-col align-center p-3 px-4 w-3/5 mx-0">
      <div className="flex mb-2 justify-start">
        <span className="font-bold text-lg">Tips</span>
      </div>
      <div className="p-1 my-2">
        <Card />
      </div>

      <div className="flex w-4/6 mt-6 my-1 mx-auto">
        <div
          style={{ height: "2px", width: "50px" }}
          className=" bg-blue-500 mx-1"
        ></div>
        <div
          style={{ height: "2px", width: "50px" }}
          className=" bg-slate-400 mx-1"
        ></div>
        <div
          style={{ height: "2px", width: "50px" }}
          className=" bg-slate-400 mx-1"
        ></div>
        <div
          style={{ height: "2px", width: "50px" }}
          className=" bg-slate-400 mx-1"
        ></div>
        <div className="-translate-y-4 mx-1 text-sm">Next</div>
      </div>
    </div>
  );
};

export default CardSlider;
