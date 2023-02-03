import axios from "axios";

const BASE_URL = "https://crud-api-for-blogging.onrender.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
