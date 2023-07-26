import axios from "axios";
import { CONTRACTS_API, Widgets_API } from "./Constants";




// <--  contractTableData  -->
export const contractTableData = async () => {
    try {
      const response = await axios.get(CONTRACTS_API);
      return response.data;
    } catch (error) {
      console.log(error.massage);
    }
  };
  export const widgetData = async () => {
    try {
      const response = await axios.get(Widgets_API);
      return response.data;
    } catch (error) {
      console.log(error.massage);
    }
  };