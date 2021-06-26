import Axios from "axios";

// console.log(Cookies.get());
const axios = Axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  // baseURL: "https://sleepy-temple-99502.herokuapp.com/api/v1/",
  // timeout: 10000,
  // withCredentials: true,
});

export default axios;
