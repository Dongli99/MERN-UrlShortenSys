import axios from "axios";
import { BaseURL } from "../config/baseURL";

/**
 * Axios instance configured with base URL and credentials.
 * @type {import('axios').AxiosInstance}
 */
export const axiosInstance = axios.create({
  baseURL: BaseURL,
  withCredentials: true,
});
