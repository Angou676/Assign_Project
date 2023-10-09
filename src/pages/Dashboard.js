import React, { useState } from "react";
import SideBar from "../components/NavComponent/SideBar/SideBar";
import Header from "../components/NavComponent/Header/Header";
import Profile from "../components/Profile/Profile";

const Dashboard = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    console.log("uhihyu");
    setDrawerOpen(!isDrawerOpen);
  };

  return (
      <section
        className="flex"
        style={{
          height: "100vh",
          width: "100wv",
          position: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
        }}
      >
        <SideBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <div className={`w-w100p `} >
          <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <Profile isDrawerOpen={isDrawerOpen} />
        </div>
      </section>
  );
};

export default Dashboard;
