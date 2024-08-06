import Axios from "../../tools/axios";

async function LoginApi(data) {
    const response = await Axios("normal").post("login", data);

    return response;
}

export default LoginApi