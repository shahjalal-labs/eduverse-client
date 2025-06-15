import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  // baseURL: "https://servereduverse.vercel.app/api/v1/",
  // https://server-edu-verse-server-eduverse.vercel.app/api/v1
  // baseURL: "https://eduverse-pink.vercel.app/api/v1/",
  // baseURL: "https://server-edu-verse-server-eduverse.vercel.app/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
