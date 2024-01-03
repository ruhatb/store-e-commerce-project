import axios from "axios";

const productionUrl = "https://workintech-fe-ecommerce.onrender.com/";
export const customFetch = axios.create({
  baseURL: productionUrl,
});
