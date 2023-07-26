import React, { useState } from "react";
import {
  RiBuildingLine,
  RiUser2Line,
  RiBriefcaseLine,
  RiFileSettingsLine
} from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi"
import { FaFileInvoice } from "react-icons/fa"
import { BiDollarCircle } from "react-icons/bi";
import { BsGift } from "react-icons/bs"
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import ResourcesSetting from "./ResourcesSetting";
import ContractSetting from "./ContractSetting";
import TimesheetSetting from "./TimesheetSetting";
import CompanySetting from "./CompanySetting";
import DocumentSetting from "./DocumentSetting";
import InvoiceSetting from "./InvoiceSetting";
import PayrollSetting from "./PayrollSetting";
import BenefitsSetting from "./BenefitsSetting";
import MailtemplateSetting from "./MailtemplateSetting";
import GenralSetting from "./GenralSetting";

const AdminSettingSidebar = ({ children }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Resources");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const AdminMenuItem = [
    {
        name: "Resources",
        icon: <RiUser2Line />,
        component: <ResourcesSetting />,
    },
    {
        name: "Contracts",
        icon: <RiBriefcaseLine />,
        component: <ContractSetting />,
    },

    {
        name: "Timesheets",
        icon: <AiOutlineClockCircle />,
        component:<TimesheetSetting />
    },
    {
        name: "Companies",
        icon: <RiBuildingLine />,
        component:<CompanySetting />
    },
    {
        name: "Documents",
        icon: <HiOutlineDocumentDuplicate />,
        component:<DocumentSetting/>
    },
    {
        name: "Invoices",
        icon: <FaFileInvoice />,
        component:<InvoiceSetting/>

    },
    {
        name: "Payroll",
        icon: <BiDollarCircle />,
        component:<PayrollSetting/>
    },
    {
        name: "Benefits",
        icon: <BsGift />,
        component:<BenefitsSetting/>
    },
    {
        name: "Mail Template",
        icon: <AiOutlineMail />,
        component:<MailtemplateSetting/>
    },
    {
        name: "Genral Settings",
        icon: <RiFileSettingsLine />,
        component:<GenralSetting/>
    },

];
  
  return (
    <div className="" style={{ display: "flex" }}>
      <div style={{ width: "270px"}} className="sidebar">
        {AdminMenuItem.map((item, index) => (
          // <div
          //   to={item}
          //   key={index}
          //   className="link"
          //   activeclassname="active"
          // >
          <div
            key={index}
            className={`link ${selectedMenuItem === item.name ? "active" : ""}`}
            onClick={() => handleMenuItemClick(item.name)}
          >
            <div className="icon">{item.icon}</div>
            <div
              className="link_text"
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
      {/* <main>{children}</main> */}
      <main>{AdminMenuItem.find(item => item.name === selectedMenuItem)?.component}</main>
    </div>
  );
};

export default AdminSettingSidebar;

