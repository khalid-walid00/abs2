import Axios from "../../../tools/axios";

async function ContactUsGetApi(lang) {
    const response = await Axios("normal").get(`show/contact`);

    return response;
}

export default ContactUsGetApi