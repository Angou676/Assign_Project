import React from "react";
import navigateData from "../../../data";

const HorizonatlNav = () => {
  return (
    <div className="flex md-sm:hidden overflow-x-auto scrollbar shadow sm:shadow-md">
      {navigateData.map((val, idx) => {
        return (
          <div
            key={idx}
            className="m-m8 text-fs10 text-grey whitespace-nowrap  max-w-max"
          >
           {val.text} <span className="ml-m10">|</span>
          </div>  
        );
      })}
    </div>
  );
};

export default HorizonatlNav;
