import Axios from "../../../tools/axios";

async function TraningGetApi(lang) {
    const response = await Axios("normal").get(`train/${lang}`);
    return response;
}

export default TraningGetApi