import axios from "axios";

const productionUrl = "https://workintech-fe-ecommerce.onrender.com";
export const customFetch = axios.create({
  baseURL: productionUrl,
});

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
