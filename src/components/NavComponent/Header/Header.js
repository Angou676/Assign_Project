import React from "react";
import logo from "../../../images/JFH_Start-Restart-Rise.png";
import forever21 from "../../../images/Image 324.png";
import HorizonatlNav from "../HorizonatlNav/HorizonatlNav";
import { useNavigate } from 'react-router-dom';

const Header = ({ isDrawerOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  const header = ["DASHBOARD", "PACKAGES", "EVENTS", "BLOGS"];

  const handleClick = (getId) => {
    switch(getId){
      case "DASHBOARD":{
        navigate('/');
        break;
      }
      case "PACKAGES":{
        navigate('/pack');
        break;
      }
      case "EVENTS":{
        navigate('/event');
        break;
      }
      case "BLOGS":{
        navigate('/blogs');
        break;
      }
      default:console.log("not found")
    }
    
  };
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
            <h3 className="  hidden sm:flex text-fs16 mr-m10 cursor-pointer hover:text-sky_blue" key={idx}
            onClick={()=>handleClick(item)}
            >
              {item}
            </h3>
          ))}
        </nav>

        {isDrawerOpen ? null : (
          <img src={logo} className="h-h26 flex sm:hidden" />
        )}

        <img src={forever21} className="h-h26 w-w26 rounded-br50p  cursor-pointer"/>
      </section>

      <HorizonatlNav />
    </>
  );
};

export default Header;
