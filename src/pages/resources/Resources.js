import React, { useContext, useEffect, useRef, useState } from "react";
import Widget from "../../components/reusable/Widget";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import ResourceTable from "../../components/userDataTable/ResourceTable";
import CommonTab from "../../components/reusable/CommonTab";
import { resourceTableData } from "../../services/ResourceServices";
import { resourceWidgetsData } from "../../services/ResourceServices";
import { TitleContext } from "../../components/header/TitleContext";
function Resources() {
  const resourceModal = "Resources";
  const dataTableRef = useRef(null);

  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Resources");
  }, [setTitle]);
  const tableColumns = [
    {
      field: "resourceId",
      header: "Resource ID",
      isSelected: true,
      isChecked: false,
      isPermanent: true,
    },
    {
      field: "resourceName",
      header: "Resource Name",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      field: "role",
      header: "Roll",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      field: "vendor",
      header: "Vendor",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      field: "joinDate",
      header: "Join Date",
      isSelected: false,
      isChecked: false,
      isPermanent: false,
    },
    {
      field: "status",
      header: "Status",
      isSelected: false,
      isChecked: false,
      isPermanent: false,
    },
  ];

  const [loading, setLoading] = useState(true);
  const [widgets, setWidgets] = useState([]);
  const [exportFormat, setExportFormat] = useState("csv");
  const [widgetLoading, setWidgetLoading] = useState(false);
  const [resourceColumns, setResourceColumns] = useState(tableColumns);
  const [resourceData, setResourceData] = useState([]);
  const [resourceFilters, setResourceFilters] = useState(null);
  const [columnFilterValue, setColumnFilterValue] = useState(false);

  const exportColumns = resourceColumns.map((col) => {
    if (col.isSelected) {
      return {
        title: col.header,
        dataKey: col.field,
      };
    }
  });

  const handleExportClick = () => {
    if (exportFormat === "csv") {
      if (dataTableRef.current) {
        dataTableRef.current.exportCSV();
      }
    } else if (exportFormat === "pdf") {
      import("jspdf").then((jsPDF) => {
        import("jspdf-autotable").then(() => {
          const doc = new jsPDF.default(0, 0);

          doc.autoTable(exportColumns, resourceData);

          doc.save("products.pdf");
        });
      });
    }
  };

  const initFilters = (resourceColumns) => {
    const initialFilters = {};
    resourceColumns.forEach((column) => {
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

    setResourceFilters(initialFilters);
  };

  useEffect(() => {
    if (resourceColumns.length > 0) {
      initFilters(resourceColumns);
    }
  }, [resourceColumns]);

  const handleFilterClick = () => {
    setColumnFilterValue(!columnFilterValue);
  };

  const handleResourceData = async () => {
    setLoading(true);
    const result = await resourceTableData();
    setResourceData(result);
    setLoading(false);
  };
  const handleWidgetData = async () => {
    setWidgetLoading(true);
    const result = await resourceWidgetsData();
    setWidgets(result);
    setWidgetLoading(false);
  };

  useEffect(() => {
    handleResourceData();
    handleWidgetData();
  }, []);

  const tabs = [
    {
      label: "All",
      content: (
        <ResourceTable
          resourceData={resourceData}
          resourceColumns={resourceColumns}
          setResourceColumns={setResourceColumns}
          loading={loading}
          filters={resourceFilters}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          dataTableRef={dataTableRef}
        />
      ),
    },
    {
      label: "Billable",
      content: (
        <ResourceTable
          resourceData={resourceData}
          resourceColumns={resourceColumns}
          setResourceColumns={setResourceColumns}
          loading={loading}
          filters={resourceFilters}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          dataTableRef={dataTableRef}
        />
      ),
    },
    {
      label: "Non Billable",
      content: (
        <ResourceTable
          resourceData={resourceData}
          resourceColumns={resourceColumns}
          setResourceColumns={setResourceColumns}
          loading={loading}
          filters={resourceFilters}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          dataTableRef={dataTableRef}
        />
      ),
    },
    {
      label: "Bench",
      content: (
        <ResourceTable
          resourceData={resourceData}
          resourceColumns={resourceColumns}
          setResourceColumns={setResourceColumns}
          loading={loading}
          filters={resourceFilters}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          dataTableRef={dataTableRef}
        />
      ),
    },
    {
      label: "Terminated",
      content: (
        <ResourceTable
          resourceColumns={resourceColumns}
          setResourceColumns={setResourceColumns}
          resourceData={resourceData}
          loading={loading}
          filters={resourceFilters}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          dataTableRef={dataTableRef}
        />
      ),
    },
  ];

  return (
    <>
      <div className="  p-2">
        <div className="container-fluid mt-4 mr-0 pr-0 ">
          {widgets?.map((item, index) => (
            <div
              key={index}
              className="w-100 mb-4 row row-cols-2 row-cols-lg-4 g-2 g-lg-3 align-items-center justify-content-center g-4"
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
          columns={resourceColumns}
          setColumns={setResourceColumns}
          data={resourceData}
          setData={setResourceData}
          handleFilterClick={handleFilterClick}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          exportFormat={exportFormat}
          setExportFormat={setExportFormat}
          handleExportClick={handleExportClick}
          modalName={resourceModal}
        />
      </div>
    </>
  );
}

export default Resources;
