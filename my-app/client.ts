import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8081";

export const client = axios.create({
  baseURL: API_URL,
});
