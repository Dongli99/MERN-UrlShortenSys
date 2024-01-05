import axios from "axios";
import { BaseURL } from "../config/baseURL";

export const axiosInstance = axios.create({
  baseURL: BaseURL,
  withCredentials: true,
});
