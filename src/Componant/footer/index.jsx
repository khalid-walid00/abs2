import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import Links from './links';

function Footer(props) {
    const  links =[
        {
           id:1,
           icon:<LocationOnIcon sx={{color:"white"}}/>,
           text:"Arabian Bureau of Services",
           link :"/"
       },{
           id:2,
           icon:<DraftsIcon sx={{color:"white"}}/>,
           text:"P.O.Box 47133 - Musaffah",
           link :"/"
       },
       {
           id:3,
           icon:<PhoneInTalkIcon sx={{color:"white"}}/>,
           text:"Tel: +971 2 5511520",
           link :"/"
       },
       {
           id:4,
           icon:<EmailIcon sx={{color:"white"}}/>,
           text:"Email: abos@abosad.com",
           link :"/"
       },
    
    ]
    return (
        <div className='bg-Blueblack lg:p-5  text-white flex justify-center'>
            <div className='lg:w-[85%] w-[95%]'>
            <div className='grid lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-7 grid-rows'>
                <Link to='/'  className='text-secoundColor'>
                Company Profile
                </Link>
                <Link to='/'  className='text-secoundColor'>
                About us
               </Link>
                <Link to='/inspections'  className='text-secoundColor text-wrap '>
                Inspections & Certifications
                </Link>
                <Link to='/training'  className='text-secoundColor'>
                Training
                </Link>
                <Link to='/approvals'  className='text-secoundColor'>
                Approvals 
               </Link>
               <Link to='/gallery'  className='text-secoundColor'>
               Gallery 
               </Link>
               <Link to='/contact'  className='text-secoundColor'>
               Contact us 
               </Link>
            </div>

            <div className='flex md:flex-row flex-col gap-5 sm:items-center'>
                <img className='lg:w-[224px] w-40 h-40 lg:h-[170]' alt="icon" src={require('../../media/images/Footer/Icon.png')}/>
                <div className='flex flex-col lg:w-7/12 justify-end'>
                <Links className="text-[20px]" links={links}/>
                </div>

                <div className='flex items-end gap-3'>
                   <img className='w-8 h-8' alt="icon" src={require('../../media/images/Footer/facebook.png')}/>
                   <img className='w-8 h-8' alt="icon" src={require('../../media/images/Footer/twitter.png')}/>
                   <img className='w-8 h-8' alt="icon" src={require('../../media/images/Footer/insta.png')}/>
                   <img className='w-8 h-8' alt="icon" src={require('../../media/images/Footer/linkin.png')}/>

                 </div>
              
                <div>

                </div>
            </div>
           
            </div>
        </div>
    );
}

export default Footer;

