import axios from "axios";
import apiHeaders from "./ApiHeaders";
import { CREATE_COMPANIES_API } from "./Constants";

const url = "/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization";

export const companiesTableData = async () => {
  try {
    const response = await axios.get(url, { headers: apiHeaders });
    console.log(response);
    console.log(response.data);

    return response.data.content;
  } catch (error) {
    console.log(error.message);
  }
};

export const createCompaniesFormData = async (formData) => {
  try {
    const response = await axios.post(CREATE_COMPANIES_API, formData);
    console.log("Create Company API response Form:", response.data);
    return response;
  } catch (error) {
    console.log("Create Company API error Form:", error.message);
  }
};