import React, { useState } from "react";
import navigateData from "../../../data";

const HorizonatlNav = () => {
  const [select, setSelect] = useState(0);
  return (
    <div className="flex md-sm:hidden overflow-x-auto scrollbar shadow sm:shadow-md">
      {navigateData.map((val, idx) => {
        return (
          <div
            key={idx}
            className={`m-m8 text-fs10  whitespace-nowrap  max-w-max ${
              idx === select ? "text-dark_yellow" : "text-grey"
            }`}
            onClick={() => setSelect(idx)}
          >
            {val.text} <span className="ml-m10">|</span>
          </div>
        );
      })}
    </div>
  );
};

export default HorizonatlNav;
