import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";

export default function Notification() {
  const menuRight = useRef(null);
  const avtar = (
    <Avatar
      image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
      shape="circle"
      className=""
    />
  );

  const notifications = [
    {
      avatar: avtar,
      name: "Anand Thanduri",
      text: "Posted a job Test-Post-Check",
      time: "3 hours ago",
    },
    {
      avatar: avtar,
      name: "Note was edited",
      text: "Note was edited for the Candidate Praveen",
      time: "1 Day ago",
    },
  ];

  return (
    <div className="flex justify-content-center">
      <Menu
        model={[
          {
            label: (
              <div className="d-flex justify-content-between">
                <div className=" ">Notification</div>
                <div className="">unread</div>
              </div>
            ),
            items: notifications.map((notification) => ({
              label: (
                <div className="d-flex">
                  <div className="mt-2 p-2">{notification.avatar}</div>
                  <div className="ml-2 mt-3">
                    <span className="font-bold">{notification.name}</span>
                    <br />
                    <span className="">{notification.text}</span>
                    <br />
                    <span className="pi pi-clock"> {notification.time}</span>
                  </div>
                </div>
              ),
            })),
          },
          {
            label: (
              <div className="text-center">
                <span>
                  <i className="pi pi-arrow-right text-xs mr-1 text-orange-500"></i>
                </span>
                <Link to={`/allnotification`}>View More...</Link>
              </div>
            ),
          },
        ]}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
        className=""
      />
      <div
        className="mr-2"
        onClick={(event) => menuRight.current.toggle(event)}
        aria-controls="popup_menu_right"
        aria-haspopup
      >
        <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '1.2rem' }}>
          <Badge value={notifications.length} severity="danger"></Badge>
        </i>
      </div>
    </div>
  );
}
