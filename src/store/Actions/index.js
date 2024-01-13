import axios from "axios";

export const loginAPI = async (credentials) => {
  return await axios.post("/login", credentials); // '/login' endpoint'ini düzeltin
};
