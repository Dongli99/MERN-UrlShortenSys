import axios from "axios";

const baseURL =
  import.meta.env.VITE_USER_NODE_ENV === "development"
    ? import.meta.env.VITE_BASE_URL
    : import.meta.env.VITE_REACT_API_URL;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
