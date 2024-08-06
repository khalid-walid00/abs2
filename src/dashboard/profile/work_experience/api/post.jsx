import Axios from "../../../../tools/axios";

async function workExperiencePostApi(data,lang) {
    
    const response = await Axios("formData").post(`work-experience/update/${data.id}`, data);

    return response;
}

export default workExperiencePostApi