import axios from "axios";
const token = localStorage.getItem("token");

export default axios.create({
  baseURL: "https://chat-api-node.onrender.com/api",
  headers: {
    "x-auth-token": token ? token : "",
  },
});
