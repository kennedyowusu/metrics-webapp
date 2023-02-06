import axios from "axios";

const instance = axios.create({
 baseURL: "https://jsonplaceholder.typicode.com",
});

// Get 

export default instance;