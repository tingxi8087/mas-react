import axios from "axios";

axios.defaults.baseURL = "";
axios.interceptors.response.use((res) => {
  return res.data;
});
export const request = axios;
