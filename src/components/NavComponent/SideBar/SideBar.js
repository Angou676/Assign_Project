import React, { useState } from "react";
import hplogo from "../../../images/hplogo.png";
import logo from "../../../images/JFH_Start-Restart-Rise.png";
import dashboard from "../../../images/dashboard.png";
import job from "../../../images/Jobs_Outline.png";
import applicant from "../../../images/profiles.png";

const SideBar = ({ isDrawerOpen, toggleDrawer }) => {
  const sideHeader = [
    {
      icon: dashboard,
      text: "Dashboard",
    },
    {
      icon: job,
      text: "Jobs",
    },
    {
      icon: applicant,
      text: "Applications",
    },
  ];

  console.log(isDrawerOpen);
  return (
    <>
        <div
          className={` 
          ${
            isDrawerOpen
              ? "block sm:hidden fixed top-0 left-0 transform transition-transform duration-300 ease-in-out"
              : "hidden sm:block transform transition-transform duration-300 ease-in-out"
          } w-w220  bg-dark_grey inset-y-0    `}
          style={{ height: "100vh" }}
        >
          <section className="w-w220 flex justify-between items-center p-4 bg-white h-h45 border-b border-grey_light">
            <img src={logo} className="h-h26" />
            <i className="fas fa-bars mr-m10" onClick={toggleDrawer} />
          </section>

          <section className="p-4">
            <div className="flex items-center">
              <img src={hplogo} className="h-h48 rounded-full" />
              <h3 className="text-fs40 text-white ml-m4">Hello,</h3>
            </div>
            <div className="text-fs16 text-white">Hewlett Packard E...</div>
          </section>

          <section className="mt-m10 p-4">
            {sideHeader.map((item, idx) => {
              return (
                <div className="flex items-center mb-m20">
                  <img src={item.icon} className="h-h26" />
                  <h5 className="text-fs16 ml-m10 text-grey">{item.text}</h5>
                </div>
              );
            })}
          </section>
        </div>
    </>
  );
};

export default SideBar;
