import axios from "axios";

const baseURL = "http://localhost:4000";

export const axiosInstance = axios.create({
  baseURL: baseURL,
});
