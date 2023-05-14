import axios from "axios";

const api = axios.create({
   baseURL: "http:///192.168.1.103:3000",
   headers: {
      "Content-Type": "application/json",
   },
});

export default api;
