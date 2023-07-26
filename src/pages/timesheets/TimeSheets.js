import { useEffect, useState, useContext, useRef } from "react";
import { TitleContext } from "../../components/header/TitleContext";
import axios from "axios";
import CommonTab from "../../components/reusable/CommonTab";
import TimeSheetTable from "../../components/userDataTable/TimeSheetTable";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import {
  timeSheetTableData,
  widgetData,
} from "../../services/TimesheetServices";
import Widget from "../../components/reusable/Widget";

function Contracts() {
  const tableColumns = [
    {
      header: "Resource",
      field: "resource",
      isSelected: true,
      isChecked: false,
      isPermanent: true,
    },
    {
      header: "Role",
      field: "role",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "Type",
      field: "type",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "Contract ID",
      field: "contractID",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "Contract Title",
      field: "contractTitle",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "Start Date",
      field: "startDate",
      isSelected: false,
      isChecked: false,
      isPermanent: false,
    },
    {
      header: "End Date",
      field: "endDate",
      isSelected: false,
      isChecked: false,
      isPermanent: false,
    },
    {
      header: "Total Hours ",
      field: "totalHrs",
      isSelected: false,
      isChecked: false,
      isPermanent: false,
    },
    {
      header: "Status",
      field: "status",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
  ];

  const [widgets, setWidgets] = useState([]);
  const { setTitle, searchTerm } = useContext(TitleContext);
  const [timeSheetData, setTimeSheetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const timeSheetModal = "Resources";
  const dataTableRef = useRef(null);
  const [timeSheetColumns, setTimeSheetColumns] = useState(tableColumns);
  const [timeSheetFilters, setTimeSheetFilters] = useState(null);
  const [columnFilterValue, setColumnFilterValue] = useState(false);
  const [exportFormat, setExportFormat] = useState("csv");
  const [widgetLoading, setWidgetLoading] = useState(false);

  const exportColumns = timeSheetColumns.map((col) => ({
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

          doc.autoTable(exportColumns, timeSheetData);
          doc.save("products.pdf");
        });
      });
    }
  };
  const initFilters = (timeSheetColumns) => {
    const initialFilters = {};
    timeSheetColumns.forEach((column) => {
      if (column.field === "joinDate") {
        initialFilters[column.field] = {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        };
      } else
        initialFilters[column.field] = {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        };
    });

    setTimeSheetFilters(initialFilters);
  };

  useEffect(() => {
    if (timeSheetColumns.length > 0) {
      initFilters(timeSheetColumns);
    }
  }, [timeSheetColumns]);
  const handleFilterClick = () => {
    setColumnFilterValue(!columnFilterValue);
  };

  const handleTimeSheetData = async () => {
    setLoading(true);
    const result = await timeSheetTableData();
    setTimeSheetData(result);
    setLoading(false);
  };

  const fetchWidgetData = async () => {
    setWidgetLoading(true);
    const result = await widgetData();
    setWidgets(result);
    setWidgetLoading(false);
  };

  useEffect(() => {
    handleTimeSheetData();
    fetchWidgetData();
  }, []);

  useEffect(() => {
    setTitle("Timesheet");
  }, [setTitle]);
  const tabs = [
    {
      label: "Active",
      content: (
        <TimeSheetTable
          timeSheetData={timeSheetData}
          timeSheetColumns={timeSheetColumns}
          setTimeSheetColumns={setTimeSheetColumns}
          loading={loading}
          filters={timeSheetFilters}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          dataTableRef={dataTableRef}
        />
      ),
    },
    {
      label: "Inactive",
      content: (
        <TimeSheetTable
          timeSheetData={timeSheetData}
          timeSheetColumns={timeSheetColumns}
          setTimeSheetColumns={setTimeSheetColumns}
          loading={loading}
          filters={timeSheetFilters}
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

        <CommonTab
          tabs={tabs}
          columns={timeSheetColumns}
          setColumns={setTimeSheetColumns}
          data={timeSheetData}
          setData={setTimeSheetData}
          handleFilterClick={handleFilterClick}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          exportFormat={exportFormat}
          setExportFormat={setExportFormat}
          handleExportClick={handleExportClick}
          modalName={timeSheetModal}
          dataTableRef={dataTableRef}
        />
      </div>
    </>
  );
}

export default Contracts;
