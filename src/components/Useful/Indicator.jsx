import React from "react";

export default function Indicator({ type, top }) {
  console.log(top, "inside top");
  return (
    <div className={`flex absolute top-[${top}px]`}>
      <img src="/icons/Indicatorleft.svg" alt="" />
      <div className="border border-[#260E5F] border-opacity-[5%] rounded-full p-2 px-5 flex gap-2">
        <img src="/icons/IndicatorText.svg" alt="" />
        {type}
      </div>
      <img src="/icons/Indicatorright.svg" alt="" />
    </div>
  );
}
