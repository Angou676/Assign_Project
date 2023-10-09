import React from "react";
import logo from "../../../images/JFH_Start-Restart-Rise.png";
import forever21 from "../../../images/Image 324.png";
import "./header.css";
import HorizonatlNav from "../HorizonatlNav/HorizonatlNav";

const Header = ({ isDrawerOpen, toggleDrawer }) => {
  const header = ["DASHBOARD", "PACKAGES", "EVENTS", "BLOGS"];
  return (
    <>
      <section className="w-w100p h-h45 flex justify-between items-center p-4 border-b border-grey_light shadow sm:shadow-md ">
        <nav className="flex items-center ">
          <i
            className={`fas fa-bars mr-m10 ${
              isDrawerOpen === false ? "flex sm:hidden" : "hidden sm:flex"
            }`}
            onClick={toggleDrawer}
          />

          {header.map((item, idx) => (
            <h3 className="  hidden sm:flex text-fs16 mr-m10" key={idx}>
              {item}
            </h3>
          ))}
        </nav>

        {isDrawerOpen ? null : (
          <img src={logo} className="h-h26 flex sm:hidden" />
        )}

        <img src={forever21} className="h-h26 w-w26 rounded-br50p" />
      </section>

      <HorizonatlNav />
    </>
  );
};

export default Header;
