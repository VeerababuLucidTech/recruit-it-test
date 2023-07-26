import axios from "axios";
import { RESOURCE_API, Widgets_API } from "./Constants";


// <--  timeSheetTableData  -->
export const employeeTableData = async () => {
  try {
    const response = await axios.get(RESOURCE_API);
    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
};
// <--  pendingEmployeeTableData  -->
export const pendingEmployeeTableData = async () => {
  try {
    const response = await axios.get(RESOURCE_API);
    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
};
// <-- widgets   --> 
export const widgetsData = async () => {
  try {
    const response = await axios.get(Widgets_API);
    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
};