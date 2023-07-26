import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Sidebar } from "primereact/sidebar";
import { TabPanel, TabView } from "primereact/tabview";
import { Tag } from "primereact/tag";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import DetailsTab from "./contractSidebarTab/DetailsTab";
import NotesTab from "./contractSidebarTab/NotesTab";
import DocumentsTab from "./contractSidebarTab/DocumentsTab";
import ResourcesTab from "./contractSidebarTab/ResourcesTab";
import RatesTab from "./contractSidebarTab/RatesTab";
import HistoryTab from "./contractSidebarTab/HistoryTab";

const ContractSidebarLayout = ({ sidebarVisible, setSidebarVisible }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabChange = (e) => {
    setActiveIndex(e?.index);
  };
  const addMenuItems = [
    { label: <div className="p-2 fw-bold">Add Notes</div> },
    { label: <div className="p-2 fw-bold"> Add Documents</div> },
    {
      label: <div className="p-2 fw-bold">Add Employee</div>,
    },
  ];
  const addButtonMenu = useRef(null);
  const sidebarTabHeaders = [
    {
      label: "Details",
      content: (
        <div className="sidebar-content">
          <DetailsTab />
        </div>
      ),
    },
    {
      label: "Notes",
      content: (
        <div className="sidebar-content">
          <NotesTab />
        </div>
      ),
    },
    {
      label: "Documents",
      content: (
        <div className="sidebar-content">
          <DocumentsTab />
        </div>
      ),
    },
    {
      label: "Resources",
      content: (
        <div className="sidebar-content">
          <ResourcesTab />
        </div>
      ),
    },
    {
      label: "Rates",
      content: (
        <div className="sidebar-content">
          <RatesTab />
        </div>
      ),
    },
    {
      label: "History",
      content: (
        <div className="sidebar-content">
          <HistoryTab />
        </div>
      ),
    },
  ];

  return (
    <>
      <Sidebar
        visible={sidebarVisible}
        position="right"
        onHide={() => setSidebarVisible(false)}
        className="custom-sidebar l-width-80"
        showCloseIcon={false}
      >
        <>
          {/* {"sidebar header "} */}
          <div className="company-layout-bg p-3 border-bottom m-0   d-flex justify-content-between align-items-center gap-3 p-0  ">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <Avatar size="xlarge" shape="circle">
                <i className="pi pi-shopping-bag fs-2"></i>
              </Avatar>
              <div className="">
                <div className="d-flex justify-content-start align-items-center gap-2">
                  <div className="company-main-text p-0 fs-6 fw-bold mb-0 mr-2">
                    Contract Title
                  </div>
                  <span className="company-secondary-text">
                    Contract Category
                  </span>
                </div>
                <div className=" d-flex justify-content-start align-items-center gap-3 mt-1">
                  <div className=" company-secondary-text fs-6 fw-bold ">
                    AV540
                  </div>
                  <Tag
                    value="Active"
                    className="company-primary-btn"
                    size="small"
                  ></Tag>
                </div>
              </div>
            </div>

            {/* add user drop down */}
            <div className="d-flex justify-content-start align-items-center pointer ">
              <Menu
                model={addMenuItems}
                popup
                ref={addButtonMenu}
                className="w-auto pl-1 pr-2 pb-2 m-1 fw-bold"
                id="popup_menu_left"
              />
              <Button
                icon="pi pi-plus"
                text
                label="Add"
                iconPos="left"
                onClick={(event) => addButtonMenu.current.toggle(event)}
                className="company-main-text m-3 bg-white"
                size="small"
              />

              <span
                className="pi pi-times-circle fs-5"
                onClick={() => setSidebarVisible(false)}
              ></span>
            </div>
          </div>
          {/* tav header */}
          <div>
            <TabView
              activeIndex={activeIndex}
              onTabChange={handleTabChange}
              className="tab-view"
            >
              {sidebarTabHeaders.map((tab, index) => (
                <TabPanel
                  key={index}
                  header={tab.label}
                  headerClassName="header"
                >
                  {tab.content}
                </TabPanel>
              ))}
            </TabView>
          </div>
        </>
      </Sidebar>
    </>
  );
};

export default ContractSidebarLayout;
