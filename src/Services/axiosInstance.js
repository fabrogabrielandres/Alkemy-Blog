import axios from "axios";
import { setRequestHeaders } from "./setRequestHeaders";
/* The API_BASE_URL import is provisional and it should be replaced
 * with some environment variable
import { API_BASE_URL } from "../common/configurations";
 */

/* An axios instance configured with the base api values required */
export const axiosInstance = axios.create({
  baseURL: "", // we should be using API_BASE_URL or an ENV variable
  headers: setRequestHeaders(),
});

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.token ?? ""}`;
  return config;
});
