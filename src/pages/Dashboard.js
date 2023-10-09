import React, { useState } from "react";
import SideBar from "../components/NavComponent/SideBar/SideBar";
import Header from "../components/NavComponent/Header/Header";
import Profile from "../components/Profile/Profile";

const Dashboard = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <section className="flex h-h100vh w-w100p fixed top-0 left-0 right-0">
      <SideBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className={`w-w100p `}>
        <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <Profile isDrawerOpen={isDrawerOpen} />
      </div>
    </section>
  );
};

export default Dashboard;
