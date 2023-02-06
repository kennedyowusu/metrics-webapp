import axios from "axios";

const instance = axios.create({
 baseURL: "https://jsonplaceholder.typicode.com",
 headers: {
  "Content-Type": "application/json",
 },
});

// Get Request
export const get = (url, params) => instance.get(url, { params });

// Post Request
export const post = (url, data) => instance.post(url, data);

export default instance;