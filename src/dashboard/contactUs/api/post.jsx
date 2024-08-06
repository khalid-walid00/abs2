import Axios from "../../../tools/axios";

async function ContactUsUpdateApi(data) {
    console.log(data)
    const response = await Axios("normal").put(`update/contact/${data.id}`, data);
   console.log(response)
    return response;
}

export default ContactUsUpdateApi