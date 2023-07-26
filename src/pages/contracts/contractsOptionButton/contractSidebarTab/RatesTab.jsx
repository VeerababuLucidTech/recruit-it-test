import { Button } from "primereact/button";
import AddSidebarRight from "../../../../components/reusable/AddSidebarRight";
import { OverlayPanel } from "primereact/overlaypanel";
import React, { useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Menu } from "primereact/menu";

const RatesTab = () => {
  const overlayTimeSheet = useRef(null);
  const products = [
    {
      field: "resourceID",
      header: "Resource ID",
    },
    {
      field: "resourceName",
      header: "Resource Name",
    },
    {
      field: "role",
      header: "Role",
    },
    {
      field: "vender",
      header: "Vender",
    },
    {
      field: "startDate",
      header: "Start Date",
    },
    {
      field: "endDate",
      header: "End Date",
    },
    {
      field: "status",
      header: "Status",
    },
  ];
  const rateOptionRef = useRef(null);
  const rateOptions = [
    { id: "email", label: <div className="p-2 fw-bold">Email</div> },
    { id: "call", label: <div className="p-2 fw-bold">Call</div> },
    { id: "chat", label: <div className="p-2 fw-bold">Chat</div> },
    {
      id: "textMessage",
      label: <div className="p-2 fw-bold">Text Message </div>,
    },
  ];
  const optionsColumn = () => {
    return (
      <div>
        <Menu
          model={rateOptions}
          popup
          ref={rateOptionRef}
          id="popup_menu_left"
          className="w-auto p-2"
        />
        <i
          className="pi pi-ellipsis-v"
          onClick={(event) => {
            event.stopPropagation();
            rateOptionRef.current?.toggle(event);
          }}
        />
      </div>
    );
  };
  return (
    <>
      <div className="p-2">
        <div className="mb-3  d-flex justify-content-between align-items-center gap-1">
          <div className="company-main-text fs-6 fw-bold">
            {" "}
            Showing 10 entries
          </div>
          <div className="  d-flex justify-content-center align-items-center gap-1">
            <>
              <Button
                onClick={(e) => overlayTimeSheet.current.toggle(e)}
                icon="pi pi-clock"
                className="company-secondary-btn w-100 px-2"
                size="large"
              />
              <OverlayPanel ref={overlayTimeSheet} breakpoints>
                <div className=" "></div>
              </OverlayPanel>
            </>

            <Button
              icon="pi pi-filter-fill"
              className="company-secondary-btn w-100 px-2"
            />
            <AddSidebarRight sidebarToBeRender={"resources"} />
          </div>
        </div>
        <DataTable value={products} size="small">
          <Column field="title" header="Resource ID"></Column>
          <Column field="resourceID" header="Resource Name"></Column>
          <Column field="w/o" header="W/O"></Column>
          <Column field="p/o" header="P/O"></Column>
          <Column field="status" header="Status"></Column>
          <Column body={optionsColumn} header=""></Column>
        </DataTable>
      </div>
    </>
  );
};

export default RatesTab;
