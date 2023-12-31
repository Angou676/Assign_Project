import React, { useState } from "react";
import hplogo from "../../../images/hplogo.png";
import menuClose from "../../../images/menulong.png";
import navigateData from "../../../data";
import { useDispatch } from "react-redux";
import { actions } from "../../../store";

const SideBar = ({ isDrawerOpen, toggleDrawer }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(0);
  const navHandler = (heading, getId) => {
    setSelect(getId);
    dispatch(
      actions.setSelectHeading({
        items: heading,
      })
    );
  };
  return (
    <>
      <div
        className={` 
          ${
            isDrawerOpen
              ? "block sm:hidden fixed top-0 left-0 transform transition-transform duration-300 ease-in-out"
              : "hidden sm:block transform transition-transform duration-300 ease-in-out"
          } w-w220  bg-dark_grey inset-y-0 h-h100vh `}
      >
        <section className="w-w220 flex justify-between items-center p-4 bg-white h-h60 border-b border-grey_light">
          <h1 style={{fontWeight:900}}>My LOGO</h1>
          <img
            src={menuClose}
            onClick={toggleDrawer}
            className="h-h26 cursor-pointer"
          />
        </section>
        <section className="p-4">
          <div className="flex items-center">
            <img src={hplogo} className="h-h48 rounded-full" />
            <h3 className="text-fs40 text-white ml-m4">Hello,</h3>
          </div>
          <div className="text-fs16 text-white">Hewlett Packard E...</div>
        </section>
        <section className="p-0">
          {navigateData.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  idx === select
                    ? "bg-bg_black border-l-4 border-dark_yellow text-dark_yellow"
                    : null
                } flex items-center mb-m10 p-2 px-4 `}
                onClick={() => navHandler(item.text, idx)}
              >
                <img src={item.icon} className="h-h26" />
                <h5 className="text-fs16 ml-m10 ">{item.text}</h5>
              </div>
            );
          })}
        </section>
        <section className="fixed bottom-0 left-0 p-4">
          <h5 className="text-fs14 text-dark_yellow">Contact Us-</h5>
          <div className="text-fs12 text-dark_yellow">agpblj@gmail.com</div>
        </section>
      </div>
    </>
  );
};

export default SideBar;
