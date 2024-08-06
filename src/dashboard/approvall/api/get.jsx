import Axios from "../../../tools/axios";

async function ApprovallGetApi() {
    const response = await Axios("normal").get(`get/approve/`);
    return response;
}

export default ApprovallGetApi