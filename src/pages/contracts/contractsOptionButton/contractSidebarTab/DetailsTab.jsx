import { InputSwitch } from "primereact/inputswitch";
import React from "react";
import { useState } from "react";

const DetailsTab = () => {
  const [checked, setChecked] = useState(true);

  const ContractDetails = [
    { label: "Project Category", value: "---", id: "projectCategory" },
    { label: "Contract Type", value: "---", id: "contractType" },
    { label: "Total Hours Estimated", value: "---", id: "totalHoursEstimated" },
    { label: "Contract End Date", value: "---", id: "contractEndDate" },
    { label: "Client", value: "---", id: "client" },
    { label: "Address line 1", value: "---", id: "addressLine1" },
    { label: "Address line 2", value: "---", id: "addressLine2" },
    { label: "No of Resources", value: "Single", id: "NoOfResources" },
  ];

  return (
    <div className="mb-4">
      <div className=" h-auto rounded mb-2">
        <div className="company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center  ">
          <div>Contract Details</div>
          <div className=" d-flex justify-content-between align-items-center gap-3">
            <InputSwitch
              checked={checked}
              onChange={(e) => setChecked(e.value)}
              size="small"
            />

            <i className="pi pi-pencil company-main-text pointer " />
          </div>
        </div>
        <div className=" border-bottom">
          <div className="row p-3 mt-1">
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">WBC Code</p>
              <p className="company-main-text p-0  mb-2 fw-bold">---</p>
            </div>
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">WBC Code</p>
              <p className="company-main-text p-0  mb-2 fw-bold">---</p>
            </div>
          </div>
          <div className="px-3">
            <div className="company-secondary-text">Description</div>
            <div className="company-main-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              magnam aut, enim molestias velit tempore?
            </div>
          </div>
          {/*  */}
          <div className="row p-3 mt-1">
            {ContractDetails.map((item, i) => (
              <div className="col-6">
                <p className="company-secondary-text p-0 mb-0">{item.label}</p>
                <p className="company-main-text p-0  mb-2 fw-bold">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" h-auto rounded mb-2">
        <div className="company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center  ">
          <div>PO Rate</div>
          <div className=" d-flex justify-content-between align-items-center gap-3">
            <i className="pi pi-pencil company-main-text pointer" />
          </div>
        </div>
        <div className=" border-bottom ">
          <div className="row p-3 mt-1">
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">PO Rate</p>
              <p className="company-main-text p-0  mb-2 fw-bold">---</p>
            </div>
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">PO Rate Type</p>
              <p className="company-main-text p-0  mb-2 fw-bold">---</p>
            </div>
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">PO Type</p>
              <p className="company-main-text p-0  mb-2 fw-bold">---</p>
            </div>
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">Payments Terms</p>
              <p className="company-main-text p-0  mb-2 fw-bold">---</p>
            </div>
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">Invoice Cycle</p>
              <p className="company-main-text p-0  mb-2 fw-bold">---</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTab;
