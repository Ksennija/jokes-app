import axios from "axios";
import { User } from "./types/userType";

export const api = axios.create({
    baseURL: "https://www.melivecode.com/api/",
    withCredentials: false,
  });
  
  export const fetchUsers = () => {
    const allUsers = api
      .get("/users")
      .then((response) => {
        // we get the user data, let's return it
        return response.data;
      })
      .catch((err) => {
        console.error(err);
        // There is an error, we must return empty array
        return [];
      });
  
    console.log(allUsers);
  
    return allUsers;
  };