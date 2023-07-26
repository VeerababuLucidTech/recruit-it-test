import axios from "axios";
import { RESOURCE_API, Widgets_API } from "./Constants";

// <--  resourceTableData  -->
export const resourceTableData = async () => {
    try {
      const response = await axios.get(RESOURCE_API);
      return response.data;
    } catch (error) {
      console.log(error.massage);
    }
  };

 // <-- widgets   --> 
export const resourceWidgetsData = async () => {
  try {
    const response = await axios.get(Widgets_API);
    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
}; 