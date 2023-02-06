import axios from "axios";

const instance = axios.create({
 baseURL: "https://jsonplaceholder.typicode.com",
});

// Get Request
instance.get("/posts").then((response) => {
 console.log(response);
});

export default instance;