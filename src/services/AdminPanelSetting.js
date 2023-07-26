import { MOCKDATA_API_BASE_URL } from "../services/Constants";
import axios from "axios";


export const getResourcesSetting = async () => {
    const URL = `${MOCKDATA_API_BASE_URL}/resources`;
    try{
        const response = await axios.get(URL);
        return response;
    } catch (error) {
        console.error(error)
    }
}