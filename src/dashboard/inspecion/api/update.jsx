import Axios from "../../../tools/axios";

async function InspectionUpdateApi(data,lang) {
    const response = await Axios("formData").post(`inspect/update/${data.id}`, data);

    return response;
}

export default InspectionUpdateApi