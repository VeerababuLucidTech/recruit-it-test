import { Button } from "primereact/button";
import AddSidebarRight from "../../../../components/reusable/AddSidebarRight";
import { OverlayPanel } from "primereact/overlaypanel";
import React, { useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Menu } from "primereact/menu";

const DocumentsTab = () => {
  const overlayTimeSheet = useRef(null);
  const products = [
    {
      field: "title",
      header: "Title",
    },
    {
      field: "resourceID",
      header: "Resource ID",
    },
    {
      field: "docNumber",
      header: "Doc Number",
    },
    {
      field: "updateDate",
      header: "Update Date",
    },
    {
      field: "expiryDate",
      header: "Expiry Date",
    },
  ];
  const documentOptionRef = useRef(null);
  const documentOptions = [
    { id: "view", label: <div className="p-2 fw-bold">View</div> },
    { id: "download", label: <div className="p-2 fw-bold">Edit</div> },
    { id: "download", label: <div className="p-2 fw-bold">Status</div> },
    { id: "download", label: <div className="p-2 fw-bold">Change Date</div> },
    {
      id: "download",
      label: <div className="p-2 fw-bold">Change Doc. Number</div>,
    },
    { id: "download", label: <div className="p-2 fw-bold">Change Title</div> },
    {
      id: "download",
      label: <div className="p-2 fw-bold">Delete Document</div>,
    },
  ];
  const optionsColumn = () => {
    return (
      <div>
        <Menu
          model={documentOptions}
          popup
          ref={documentOptionRef}
          id="popup_menu_left"
          className="w-auto p-2"
        />
        <i
          className="pi pi-ellipsis-v"
          onClick={(event) => {
            event.stopPropagation();
            documentOptionRef.current?.toggle(event);
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
            Showing 5 entries
          </div>
          <div className="  d-flex justify-content-center align-items-center gap-1">
            <>
              <Button
                onClick={(e) => overlayTimeSheet.current.toggle(e)}
                icon="pi pi-clock"
                className="company-secondary-btn  w-100 px-2"
                size="large"
              />
              <OverlayPanel ref={overlayTimeSheet} breakpoints>
                <div className=""></div>
              </OverlayPanel>
            </>

            <Button
              icon="pi pi-filter-fill"
              className="company-secondary-btn  w-100 px-2"
            />
            <AddSidebarRight sidebarToBeRender={"resources"} />
          </div>
        </div>
        <DataTable value={products} size="normal">
          <Column field="title" header="Title"></Column>
          <Column field="resourceID" header="Resource ID"></Column>
          <Column field="docNumber" header="Doc Number"></Column>
          <Column field="updateDate" header="Update Date"></Column>
          <Column field="expiryDate" header="Expiry Date"></Column>
          <Column body={optionsColumn} header=""></Column>
        </DataTable>
      </div>
    </>
  );
};

export default DocumentsTab;
