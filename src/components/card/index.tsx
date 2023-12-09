import React from "react";

const Card = () => {
  return (
    <div className="bg-slate-100 p-2 py-4 rounded-xl px-6">
      <div className="flex justify-between my-2 mb-6">
        <div className="justify-between">
          <span className="font-bold text-lg">Gold is up 20%</span>
        </div>
        <div>image</div>
      </div>
      <div className="my-2">
        <p className="text-start text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
          libero?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
          ratione nesciunt sed sint voluptatibus, error adipisci cumque porro
          aut repellendus.
        </p>
      </div>
    </div>
  );
};

export default Card;
