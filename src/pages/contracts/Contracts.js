import Table from "react-bootstrap/Table";
import { useEffect, useState, useContext, useRef } from "react";
import { TitleContext } from "../../components/header/TitleContext";
import CommonTab from "../../components/reusable/CommonTab";
import ContractsTable from "../../components/userDataTable/ContractsTable";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { contractTableData, widgetData } from "../../services/ContractServices";
import Widget from "../../components/reusable/Widget";

function Contracts() {
  const tableColumns = [
    {
      header: "Contract ID",
      field: "contractId",
      isSelected: true,
      isChecked: false,
      isPermanent: true,
    },
    {
      header: "Contract Title ",
      field: "contractTitle",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "Contract Owner",
      field: "contractOwner",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "Resources",
      field: "resources",
      isSelected: true,
      isChecked: true,
      isPermanent: false,
    },
    {
      header: "Client Name",
      field: "clientName",
      isSelected: true,
      isChecked: true,
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
      header: "Start Date",
      field: "startDate",
      isSelected: false,
      isChecked: false,
      isPermanent: false,
    },
    {
      header: "Location",
      field: "location",
      isSelected: false,
      isChecked: false,
      isPermanent: false,
    },
  ];

  const { setTitle, searchTerm } = useContext(TitleContext);
  const ContractsModal = "Contracts";
  const dataTableRef = useRef(null);
  const [contractsData, setContractsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contractsColumns, setContractsColumns] = useState(tableColumns);
  const [contractFilters, setContractFilters] = useState(null);
  const [columnFilterValue, setColumnFilterValue] = useState(false);
  const [exportFormat, setExportFormat] = useState("csv");
  const [widgets, setWidgets] = useState([]);
  const [widgetLoading, setWidgetLoading] = useState(false);

  useEffect(() => {
    setTitle("Contracts");
  }, [setTitle]);

  const exportColumns = contractsColumns.map((col) => ({
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

          doc.autoTable(exportColumns, contractsData);
          doc.save("products.pdf");
        });
      });
    }
  };
  const initFilters = (contractsColumns) => {
    const initialFilters = {};
    contractsColumns.forEach((column) => {
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

    setContractFilters(initialFilters);
  };
  useEffect(() => {
    if (contractsColumns.length > 0) {
      initFilters(contractsColumns);
    }
  }, [contractsColumns]);

  const handleFilterClick = () => {
    setColumnFilterValue(!columnFilterValue);
  };

  const handleContractData = async () => {
    setLoading(true);
    const result = await contractTableData();
    setContractsData(result);
    setLoading(false);
  };

  const fetchWidgetData = async () => {
    setWidgetLoading(true);
    const result = await widgetData();
    setWidgets(result);
    setWidgetLoading(false);
  };

  useEffect(() => {
    handleContractData();
    fetchWidgetData();
  }, []);
  const tabs = [
    {
      label: "All",
      content: (
        <ContractsTable
          contractsData={contractsData}
          contractsColumns={contractsColumns}
          setContractsColumns={setContractsColumns}
          loading={loading}
          filters={contractFilters}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          dataTableRef={dataTableRef}
        />
      ),
    },
    {
      label: "Active",
      content: (
        <ContractsTable
          contractsData={contractsData}
          contractsColumns={contractsColumns}
          setContractsColumns={setContractsColumns}
          loading={loading}
          filters={contractFilters}
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
              className="w-100 mb-3 row row-cols-2 row-cols-lg-4 g-2 g-lg-3 align-items-center justify-content-center g-4"
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
          columns={contractsColumns}
          setColumns={setContractsColumns}
          data={contractsData}
          setData={setContractsData}
          handleFilterClick={handleFilterClick}
          columnFilterValue={columnFilterValue}
          setColumnFilterValue={setColumnFilterValue}
          exportFormat={exportFormat}
          setExportFormat={setExportFormat}
          handleExportClick={handleExportClick}
          modalName={ContractsModal}
        />
      </div>
    </>
  );
}

export default Contracts;
