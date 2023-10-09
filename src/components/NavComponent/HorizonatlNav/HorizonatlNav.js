import React from "react";
import dashboard from "../../../images/dashboard.png";
import job from "../../../images/Jobs_Outline.png";
import applicant from "../../../images/profiles.png";

const HorizonatlNav = () => {
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
    {
      icon: job,
      text: "Jobs",
    },
    {
      icon: applicant,
      text: "Applications",
    },
    {
      icon: applicant,
      text: "Applications",
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

  return (
    <div className=" flex md-sm:hidden overflow-x-auto whitespace-no-wrap scrollbar shadow sm:shadow-md ">
      {sideHeader.map((val, idx) => {
        return <span className="m-m8 text-fs10 text-grey">{val.text}</span>;
      })}
    </div>
  );
};

export default HorizonatlNav;
