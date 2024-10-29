import axios from "axios";

export const api = axios.create({
    baseURL: "https://official-joke-api.appspot.com",
    withCredentials: false,
  });
  
  export const fetchUsers = () => {
    const allUsers = api
      .get("/random_ten")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(err);
        return [];
      });
    
    return allUsers;
  };