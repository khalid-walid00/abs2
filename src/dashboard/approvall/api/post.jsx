import Axios from "../../../tools/axios";

async function approvallPostApi(data) {
    const response = await Axios("formData").post("add/approve",{image:data});

    return response;
}

export default approvallPostApi