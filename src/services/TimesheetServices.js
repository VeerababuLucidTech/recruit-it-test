import axios from "axios";
import { TIMESHEET_API, Widgets_API } from "./Constants";



// <--  timeSheetTableData  -->
export const timeSheetTableData = async () => {
    try {
      const response = await axios.get(TIMESHEET_API);
      return response.data;
    } catch (error) {
      console.log(error.massage);
    }
  };
  // <--  widgetData  -->
export const widgetData = async () => {
  try {
    const response = await axios.get(Widgets_API);
    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
};