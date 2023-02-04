import axios from "axios";
//https://crud-api-for-blogging.onrender.com/
const BASE_URL = "https://crud-api-for-blogging.onrender.com/";
const TOKEN = localStorage.getItem("token");

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
