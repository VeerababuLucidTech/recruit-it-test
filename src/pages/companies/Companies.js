import { TitleContext } from "../../components/header/TitleContext";
import { useContext } from "react";
import { companiesTableData } from "../../services/CompaniesServices";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CommonTabs from "../../components/reusable/CommonTab";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import Widget from "../../components/reusable/Widget";
import CompaniesTable from "../../components/userDataTable/CompaniesTable";

function Companies() {
  const tableColumns = [
    {
      header: "Company Name",
      field: "companyName",
      isSelected: true,
      isChecked: false,
      isPermanent: true,
    },

    {
      header: "Location", 
      field: "location",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "Role",
      field: "role",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "CEO Name",
      field: "ceoName",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "CEO Phone",
      field: "ceoPhone",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "Created On",
      field: "createdOn",
      isSelected: false,
      isChecked: false,
      isPermanent: false,
    },
  ];
  const companiesModal = "Companies";
  const dataTableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [companiesColumns, setCompaniesColumns] = useState(tableColumns);
  const [companiesData, setCompaniesData] = useState([]);
  const [companiesFilters, setCompaniesFilters] = useState(null);
  const [columnFilterValue, setColumnFilterValue] = useState(false);
  const [exportFormat, setExportFormat] = useState("csv");
  const [widgets, setWidgets] = useState([]);
  const [widgetLoading, setWidgetLoading] = useState(false);
  const { setTitle } = useContext(TitleContext);

  const handleCompaniesData = async () => {
    setLoading(true);
    const result = await companiesTableData();

    setCompaniesData(result);
    setLoading(false);
  };
  const fetchWidgetData = async () => {
    try {
      setWidgetLoading(true);
      const { data } = await axios.get("http://localhost:4000/resourcesWidget");
      setWidgetLoading(false);
      setWidgets(data);
    } catch (error) {
      console.log(error.massage);
      setWidgetLoading(true);
    }
  };
  useEffect(() => {
    handleCompaniesData();
    fetchWidgetData();
  }, []);
  const exportColumns = companiesColumns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));
  const handleExportClick = () => {
    if (exportFormat === "csv") {
      if (dataTableRef.current) {
        dataTableRef.current.exportCSV();
      }
    } else if (exportFormat === "pdf") {
      import("jspdf").then((jsPDF) => {
        import("jspdf-autotable").then(() => {
          const doc = new jsPDF.default(0, 0);

          doc.autoTable(exportColumns, companiesData);

          doc.save("products.pdf");
        });
      });
    }
  };
  const initFilters = (companiesColumns) => {
    const initialFilters = {};
    companiesColumns.forEach((column) => {
      if (column.field === "ceoPhone") {
        initialFilters[column.field] = {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.IN }],
        };
      } else
        initialFilters[column.field] = {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        };
    });

    setCompaniesFilters(initialFilters);
  };
  useEffect(() => {
    if (companiesColumns.length > 0) {
      initFilters(companiesColumns);
    }
  }, [companiesColumns]);

  const handleFilterClick = () => {
    setColumnFilterValue(!columnFilterValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await companiesTableData();
    };

    fetchData();
    setTitle("Companies");
  }, [setTitle]);

  const tabs = [
    {
      label: "Showing 1 to 15 of 50 entries",
      content: (
        <CompaniesTable
          companiesData={companiesData}
          companiesColumns={companiesColumns}
          setCompaniesColumns={setCompaniesColumns}
          loading={loading}
          filters={companiesFilters}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          dataTableRef={dataTableRef}
        />
      ),
    },
  ];

  return (
    <>
      <div className="container-fluid p-2">
        <div className="container-fluid mt-4 mr-0 pr-0 ">
          {widgets?.map((item, index) => (
            <div
              key={index}
              className="w-100 mb-2 row row-cols-2 row-cols-lg-4 g-2 g-lg-3 align-items-center justify-content-center g-4"
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
            </div>
          ))}
        </div>
        <CommonTabs
          tabs={tabs}
          columns={companiesColumns}
          setColumns={setCompaniesColumns}
          data={companiesData}
          setData={setCompaniesData}
          modalName={companiesModal}
          handleFilterClick={handleFilterClick}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          exportFormat={exportFormat}
          setExportFormat={setExportFormat}
          handleExportClick={handleExportClick}
        />
      </div>
    </>
  );
}

export default Companies;
