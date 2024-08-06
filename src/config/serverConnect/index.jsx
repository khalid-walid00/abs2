import Cookie from "cookie-universal";

const cookies = Cookie();
export const url = "http://127.0.0.1:8000/api/";
export const token = cookies.get("access")