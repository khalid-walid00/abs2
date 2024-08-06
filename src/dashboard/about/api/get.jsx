import Axios from "../../../tools/axios";

async function AboutGetApi(lang) {
    const response = await Axios("normal").get(`about/${lang}`);
   console.log(response)
    return response;
}

export default AboutGetApi