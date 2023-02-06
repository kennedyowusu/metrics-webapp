import axios from "axios";

const instance = axios.create({
 baseURL: "https://jsonplaceholder.typicode.com",
});

// Get Request


export default instance;