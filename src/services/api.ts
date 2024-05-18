import axios, { AxiosInstance } from "axios";

// Create an Axios instance with the appropriate configuration
const api: AxiosInstance = axios.create({
  baseURL: "https://my-api.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
