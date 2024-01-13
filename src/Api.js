import axios from "axios";
/*
const productionUrl = "https://workintech-fe-ecommerce.onrender.com";
export const customFetch = axios.create({
  baseURL: productionUrl,
});*/

/*
import axios from "axios";

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: {},
  });
};

export let AxiosInstance = createAxiosInstance(); 
*/

const api = axios.create({
  baseURL: "https://workinteck-fe-final.onrender.com",
});

export default api;

export const loginAPI = async (credentials) => {
  return await axios.post("/login", credentials); // '/login' endpoint'ini düzeltin
};
