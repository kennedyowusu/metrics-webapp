import axios from "axios";

const instance = axios.create({
 baseURL: "https://res",
 headers: {
  "Content-Type": "application/json",
 },
});

// Get Request
export const getCountries = (url, params) => instance.get(url, { params })

// Post Request
export const post = (url, data) => instance.post(url, data);

export default instance;