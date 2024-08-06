import Axios from "../../../tools/axios";

async function GalleryPutApi(data) {
    const response = await Axios("formData").post(`gallary/update/${data.id}`,data);

    return response;
}

export default GalleryPutApi