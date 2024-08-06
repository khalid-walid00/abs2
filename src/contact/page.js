import React, { useEffect } from 'react';
import Links from '../Componant/footer/links';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import Maps from './maps';
import Line from '../Componant/cunstoms/line';
import { useDispatch, useSelector } from 'react-redux';
import { GetContactUs } from '../tools/redux/Slices/ContactUs';
import ContactUsGetApi from '../dashboard/contactUs/api/get';
import { Link } from '@mui/material';
import LoadingPage from '../Componant/loading';

function ContactUs(props) {
    const links = [
        {
            id: 1,
            icon: <LocationOnIcon sx={{ color: "#024160" }} />,
            text: "Arabian Bureau of Services",
            link: "/"
        },
        {
            id: 2,
            icon: <DraftsIcon sx={{ color: "#024160" }} />,
            text: "P.O.Box 47133 - Abu Dhabi",
            link: "/"
        },
        {
            id: 3,
            icon: <PhoneInTalkIcon sx={{ color: "#024160" }} />,
            text: "Tel: +971 2 6674166",
            link: "/"
        },
        {
            id: 4,
            icon: <EmailIcon sx={{ color: "#024160" }} />,
            text: "Email: abosad@emirates.net.ae",
            link: "/"
        },
    ];

    const { lang } = useSelector((state) => state.Toggle);
    const { contactUs_info,loading } = useSelector((state) => state.contactUsPage);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            ContactUsGetApi(lang).then((res) => dispatch(GetContactUs(res.data)));
        } catch (error) {
            console.error(error);
        }
    }, [lang, dispatch]);

    const contact1 = contactUs_info[0] || {};
    const [lat1, lng1] = contact1["lat,lng"]?.split(",") || [];

    const contact2 = contactUs_info[1] || {};
    const [lat2, lng2] = contact2["lat,lng"]?.split(",") || [];
 console.log("contactUs_info",contactUs_info)
    return (
        <div className='bg-thirdColor flex justify-center pt-10 mb-5 pb-2 rounded-[87px] h-max'>
                 {loading && <LoadingPage/>}
            <div className='lg:w-10/12 w-11/12'>
                <div className='text-Blueblack font-bold lg:text-[40px] md:text2xl text-xl mb-4'>For Enquire & Complaints</div>
                <Link to="/" className='flex items-center gap-2 text-Blueblack no-underline' style={{ textDecoration: "none", color: '#024160' }}>
                    <LocationOnIcon sx={{ color: "#024160" }} />
                    <div className='font-[500]'>{contact1.adderss}</div>
                </Link>
                <Link to="/" className='flex items-center gap-2 text-Blueblack no-underline' style={{ textDecoration: "none", color: '#024160' }}>
                    <DraftsIcon sx={{ color: "#024160" }} />
                    <div className='font-[500]'>{contact1.email}</div>
                </Link>
                <Link to="/" className='flex items-center gap-2 text-Blueblack no-underline' style={{ textDecoration: "none", color: '#024160' }}>
                    <PhoneInTalkIcon sx={{ color: "#024160" }} />
                    <div className='font-[500]'>{contact1.tel}</div>
                </Link>
                <Link to="/" className='flex items-center gap-2 text-Blueblack no-underline' style={{ textDecoration: "none", color: '#024160' }}>
                    <EmailIcon sx={{ color: "#024160" }} />
                    <div className='font-[500]'>{contact1.type}</div>
                </Link>
                <div className='flex justify-center mt-10'>
                    <div className='md:w-9/12 w-full'>
                        <Maps lat={lat1} lng={lng1} />
                    </div>
                </div>
                <div className='my-5'>
                    <Line color='#000' type='solid' />
                </div>
                <div className='text-Blueblack font-bold lg:text-[40px] md:text2xl text-xl mt-10 mb-4'>Certificates</div>
                <Links links={links} textSize='32px' />
                <div className='flex justify-center mt-10'>
                    <div className='md:w-9/12 w-full'>
                        <Maps lat={lat2} lng={lng2} />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ContactUs;
