import React, { useEffect, useState } from "react";
import axios from "axios";
import Widget from "../../components/reusable/Widget";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DashboardPendingEmployee from "../../components/skeletons/DashboardPendingEmployee";
import DashboardEmployee from "../../components/skeletons/DashboardEmployee";
import Bchart from "../charts/Bchart";

import {
  employeeTableData,
  pendingEmployeeTableData,
  widgetsData,
} from "../../services/DashboardServices";
import { TitleContext } from "../../components/header/TitleContext";
import { useContext } from "react";
function Dashboard() {
  const [widgets, setWidgets] = useState([]);
  const [widgetLoading, setWidgetLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [pendingEmployeeData, setPendingEmployeeData] = useState([]);
  const [employeeDataLoading, setEmployeeDataLoading] = useState(false);
  const [dataChart, setDataChart] = useState([]);

  const generateRandomColor = () => {
    let color = "#";
    const digits = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 16);
      color += digits[randomDigit];
    }
    return color;
  };

  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Dashboard");
  }, [setTitle]);
  const handleEmployeeData = async () => {
    setEmployeeDataLoading(true);
    const result = await employeeTableData();
    const tableData = result?.slice(0, 6);
    setEmployeeData(tableData);
    setEmployeeDataLoading(false);
  };
  const handlePendingEmployeeData = async () => {
    setEmployeeDataLoading(true);
    const result = await pendingEmployeeTableData();
    const tableData = result?.slice(0, 6);
    setPendingEmployeeData(tableData);
    setEmployeeDataLoading(false);
  };

  const handleWidgetData = async () => {
    setWidgetLoading(true);
    const result = await widgetsData();
    setWidgets(result);
    setWidgetLoading(false);
  };

  useEffect(() => {
    handleEmployeeData();
    handlePendingEmployeeData();
    handleWidgetData();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/ChartData");
      const data = response.data;

      const formattedData = data[0].Data.map((item) => ({
        name: item.name,
        ...item,
      }));

      setDataChart(formattedData);
    } catch (error) {
      console.error(error);
    }
  };

  if (dataChart.length === 0) {
    return null;
  }
  const legendKeys = Object.keys(dataChart[0]).filter((key) => key !== "name");

  const header1 = (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
      <div className="fs-5 font-bold">Pending[381]</div>
      <div>
        <Button
          className="company-primary-text"
          label="Create International Employee"
          text
          icon=" pi pi-plus"
        />
        <Button
          className="company-primary-text"
          label="Create Employee"
          text
          icon=" pi pi-plus"
        />
      </div>
    </div>
  );
  const header2 = (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
      <div className="fs-5 font-bold">Employee[351]</div>
      <div>
        <Button
          className="company-primary-text"
          label="Create International Employee"
          text
          icon=" pi pi-plus"
        />
        <Button
          className="company-primary-text"
          label="Create Employee"
          text
          icon=" pi pi-plus"
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="container-fluid mt-4 mr-0 pr-0  p-2">
        {widgets?.map((item, index) => (
          <div
            key={index}
            className="row row-cols-2 mb-4 row-cols-lg-4 g-2 g-lg-3 align-items-center justify-content-center g-4"
          >
            <div className="col">
              <Widget
                title="Active Contracts"
                value={item.billableEmployees}
                graphData=""
              />
            </div>
            <div className="col">
              <Widget
                title="Billable Resources"
                value={item.nonBillableEmployees}
                graphData=""
              />
            </div>
            <div className="col">
              <Widget
                title="Pending Invoices"
                value={item.w2Employees}
                graphData=""
              />
            </div>
            <div className="col">
              <Widget
                title="Vender Applications"
                value={item.c2cEmployees}
                graphData=""
              />
            </div>
            <div className="col">
              <Widget
                title="Work Auth. Expiring"
                value={item.c2cEmployees}
                graphData=""
              />
            </div>
            <div className="col">
              <Widget
                title="EMS Notes(Manual)"
                value={item.c2cEmployees}
                graphData=""
              />
            </div>
            <div className="col">
              <Widget
                title="Expired Work Auth."
                value={item.c2cEmployees}
                graphData=""
              />
            </div>
            <div className="col">
              <Widget
                title="EMS Activity(Auto)"
                value={item.c2cEmployees}
                graphData=""
              />
            </div>
          </div>
        ))}
      </div>
      <div fluid className="container-fluid p-2">
        {/* graph */}
        <div className="container-fluid mt-4">
          <div className="row mb-5">
            <div className="col-8">
              <Bchart
                data={dataChart}
                xAxisName={"name"}
                legendKeys={legendKeys}
                generateColor={generateRandomColor}
              />
            </div>
            <div className="col-4 bg-white">
              <div className="p-3">
                <p className="fs-5 fw-bold text-center company-main-text">
                  Company Profile
                </p>
                <div className="mt-5 text-center">
                  <div className="fs-5 company-main-text">
                    Lucid Technologies.inc
                  </div>
                  <div className="fs-6 company-secondary-text">
                    info@lucidtech.com
                  </div>
                  <div className="fs-6 company-secondary-text">
                    8600, freeport Pkwy, STE 300
                  </div>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center mt-3 ">
                  <Button
                    className="company-primary-text"
                    label="View more"
                    text
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pending table */}
        <div className=" container-fluid mb-5">
          <div className="row">
            <div className="col-3 bg-white rounded"></div>
            <div className="col-8 rounded">
              {employeeDataLoading ? (
                <DashboardPendingEmployee header1={header1} />
              ) : (
                <DataTable value={employeeData} header={header1} size="small">
                  <Column field="resourceName" header="Full Name" />
                  <Column field="resourceId" header="Employee ID" />
                  <Column field="role" header="Role" />
                  <Column field="status" header="Status" />
                </DataTable>
              )}
            </div>
          </div>
        </div>
        {employeeDataLoading ? (
          <DashboardEmployee header2={header2} />
        ) : (
          <DataTable
            value={pendingEmployeeData}
            header={header2}
            size="small"
            tableStyle={{ border: "none", marginBottom: "40px" }}
            tableClassName="borderless-table"
          >
            <Column field="resourceName" header="Full Name" />
            <Column field="resourceId" header="Employee ID" />
            <Column field="role" header="Role" />
            <Column field="status" header="Status" />
          </DataTable>
        )}
      </div>
    </>
  );
}

export default Dashboard;
