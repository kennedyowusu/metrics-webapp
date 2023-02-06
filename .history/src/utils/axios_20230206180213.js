import axios from "axios";

const instance = axios.create({
 baseURL: "https://jsonplaceholder.typicode.com",
 headers: {
  "Content-Type": "application/json",
 },
});

// Get Request


export default instance;