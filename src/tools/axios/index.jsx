import axios from "axios";
import { token, url } from "../../config/serverConnect";

const Axios = (type = "normal") =>
 axios.create({
  baseURL: `${url}`,
  headers: {
    "Content-Type": type === "normal" ? "application/json": "multipart/form-data" ,
    "Authorization": "Bearer " + token ,
    "x-token": "arabian_bureau-of_services"
  }
});

export default Axios;