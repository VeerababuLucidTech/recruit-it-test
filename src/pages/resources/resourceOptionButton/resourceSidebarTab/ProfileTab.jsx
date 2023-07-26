import React from "react";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";

function ProfileTab() {
  const [checked, setChecked] = useState(true);

  const employeeDetails = [
    { id: "firstName", label: "First Name", value: "Abhilash" },
    { id: "lastName", label: "Last Name", value: "Bande" },
    { id: "displayName", label: "Display Name", value: "---" },
    { id: "primaryEmailId", label: "Primary Email ID", value: "---" },
    { id: "dob", label: "DOB", value: "" },
    { id: "ssn", label: "SSN", value: "" },
    { id: "dLNumber", label: "DL Number", value: "C2C Employee" },
    { id: "licenseExp", label: "License-Exp", value: "15 jun 2023" },
    { id: "startDate", label: "Start Date", value: "15 july 2024" },
    { id: "gender", label: "Gender", value: "Male" },
    { id: "maritalStatus", label: "Marital Status", value: "Single" },
    { id: "employeeType", label: "Employee Type", value: "W2 Employee" },
    { id: "currentStatus", label: "Current Status", value: "Terminated" },
    { id: "invoiceCycle", label: "Invoice Cycle", value: "---" },
  ];
  return (
    <div className="mb-5">
      {/* employee profile */}
      <div className=" h-auto rounded mb-2">
        <div className="company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center  ">
          <div>Employee Profile</div>
          <div className=" d-flex justify-content-between align-items-center gap-3">
            <InputSwitch
              checked={checked}
              onChange={(e) => setChecked(e.value)}
              size="small"
            />

            <i className="pi pi-pencil company-main-text " />
          </div>
        </div>
        <div className=" border-bottom">
          <div className="row p-3 mt-1">
            {employeeDetails.map((item) => (
              <div className="col-6" key={item.id}>
                <p className="company-secondary-text p-0 mb-0">{item.label}</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* contact Details */}
      <div className=" h-auto rounded mb-2">
        <div className="company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center  ">
          <div>Contact Details</div>
          <div className=" d-flex justify-content-between align-items-center gap-3">
            <i className="pi pi-pencil company-secondary-text" />
          </div>
        </div>
        <div className=" border-bottom">
          <div className="row p-3 mt-1">
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">Phone</p>
              <p className="company-main-text p-0  mb-2 fw-normal">---</p>
            </div>
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">Email</p>
              <p className="company-main-text p-0  mb-2 fw-normal">---</p>
            </div>
          </div>
        </div>
      </div>
      {/* Address */}
      <div className=" h-auto rounded mb-2">
        <div className="company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center  ">
          <div>Address</div>
          <div className=" d-flex justify-content-between align-items-center gap-3">
            <i className="pi pi-pencil company-secondary-text " />
          </div>
        </div>
        <div className=" border-bottom">
          <div className="row p-3 mt-1"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTab;
