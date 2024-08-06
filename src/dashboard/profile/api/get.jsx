import Axios from "../../../tools/axios";

async function ProfileGetApi(lang) {
    const response = await Axios("normal").get(`:${lang}?id=1`);
    return response;
}

export default ProfileGetApi