import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://server-edu-verse.vercel.app/api/v1/",
  // baseURL: "http://localhost:5000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
