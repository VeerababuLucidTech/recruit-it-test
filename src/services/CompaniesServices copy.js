import axios from "axios";
import apiHeaders from "./ApiHeaders";
import { COMPANIES_API } from "./Constants";

const url = "/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization";
export const companiesTableData = async () => {
  try {
    const response = await axios.get(url,{ headers: apiHeaders });
    console.log(response);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
};
