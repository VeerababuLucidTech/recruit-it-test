import axios from "axios";
import { ADDRESSBOOK_USER_API } from "./Constants";



// <--  addressBookUserData  -->
export const addressBookUserData = async () => {
    try {
      const response = await axios.get(ADDRESSBOOK_USER_API);
      console.log(response.data.users);
      return response.data.users;
    } catch (error) {
      console.log(error.massage);
    }
  };