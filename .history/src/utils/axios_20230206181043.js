import axios from "axios";

const instance = axios.create({
 baseURL: "",
 headers: {
  "Content-Type": "application/json",
 },
});

// Get Request
export const getCountries = (url, params) => instance.get(url, { params })

// Post Request
export const post = (url, data) => instance.post(url, data);

export default instance;