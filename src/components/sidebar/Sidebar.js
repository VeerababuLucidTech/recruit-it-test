import React, { useState, useEffect  } from "react";

import { NavLink , useLocation  } from "react-router-dom";
import MenuItems from "./SidebarMenu";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  useEffect(() => {
    if (isAdminPage && isOpen) {
      setIsOpen(false);
    }
  }, [isAdminPage]);

  return (
    <div className="" style={{ display: "flex" }}>
      <div style={{ width: isOpen ? "250px" : "60px" }} className="sidebar">
        <div className="top_section">
          <div
            style={{ display: isOpen ? "flex" : "none" }}
            className="logo-text"
          >
            <img src="./lucid.png" alt="logo"></img>
            <h1>Software</h1>
          </div>
          {/* <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className="bars"> */}
            {/* <FaBars onClick={toggle} /> */}
            {/* <img src="./menu.svg" alt="menu" onClick={toggle} /> */}
            {/* <img src="./close-menu.svg" alt="closemenu" onClick={toggle}/> */}
          {/* </div> */}
          <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className="bars">
            {isAdminPage ? (
              <img src="./menu.svg" alt="menu" style={{opacity:"0.2",cursor:"no-drop"}} />
            ) : (
              <img src="./menu.svg" alt="menu" onClick={toggle} />
            )}
          </div>
        </div>
        {MenuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon" onClick={()=>{localStorage.setItem("selectedPath",item.path)}} >{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
