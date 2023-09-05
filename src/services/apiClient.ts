import axios from "axios";
const token = localStorage.getItem("token");

// const url = "https://chat-api-node.onrender.com/api";

export default axios.create({
  baseURL: "http://localhost:9000/api",
  headers: {
    "x-auth-token": token ? token : "",
  },
});
