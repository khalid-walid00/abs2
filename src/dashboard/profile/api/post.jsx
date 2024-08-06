import Axios from "../../../tools/axios";

async function ProfilePostApi(data,lang) {
    
    const response = await Axios("formData").post("update/company/1", data);

    return response;
}

export default ProfilePostApi
