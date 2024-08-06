import Axios from "../../../tools/axios";

async function GallaryGetApi(lang) {
    const response = await Axios("normal").get(`/gallary/${lang}`);
    return response;
}

export default GallaryGetApi