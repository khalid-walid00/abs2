import Axios from "../../../tools/axios";

async function AboutPutApi(data,lang) {
    const response = await Axios("formData").post(`/about/update/${data.id}`, data);

    return response;
}

export default AboutPutApi