import Axios from "../../../tools/axios";

async function ApprovallDeleteApi(id) {
    const response = await Axios("normal").delete(`delete/approve/${id}`);
    return response;
}

export default ApprovallDeleteApi