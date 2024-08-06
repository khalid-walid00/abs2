import Axios from "../../../tools/axios";

async function InspectionGetApi(lang) {
    const response = await Axios("normal").get(`inspect/${lang}`);
    console.log("response",response)
    return response;
}

export default InspectionGetApi