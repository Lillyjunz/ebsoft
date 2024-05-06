import axios from "axios";

const BASE_URL = "https://ebsoft.onrender.com/api/";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
