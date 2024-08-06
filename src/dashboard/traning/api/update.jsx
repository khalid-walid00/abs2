import Axios from "../../../tools/axios";

async function TraningPutApi(data) {
    const response = await Axios("formData").post(`train/update/${data.id}`,data);

    return response;
}

export default TraningPutApi