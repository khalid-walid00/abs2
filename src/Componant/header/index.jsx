import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from '../sideBar/sideBar';
import { useState } from 'react';
import style from "./style.css";  // Ensure this import points to the correct CSS file
import Logout from '../checkAuth/index';
import TriStateSwitch from '../translate/index';
import SettingsIcon from '@mui/icons-material/Settings';
import { token } from '../../config/serverConnect';
function Header(props) {
    const [openSideBar, setOpenSideBar] = useState(true);

    return (
        <>
            <div className='flex sticky top-0 bg-white justify-center  z-[999999999]'>
                <div className='flex justify-between w-full lg:w-[96.8%] xl:w-[87%] py-2'>
                    <img className='xl:w-80 w-64' alt="logo" src={require("../../media/images/logo.png")} />
                    <div className='hidden gap-4 lg:flex xl:flex 2xl:flex'>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.active} text-Blueblack self-center font-bold text-[14px]` : "text-Blueblack self-center font-bold text-[14px]"}
                            to='/'
                        >
                            Company Profile
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.active} text-Blueblack self-center font-bold text-[14px]` : "text-Blueblack self-center font-bold text-[14px]"}
                            to='/about'
                        >
                            About us
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.active} text-Blueblack self-center font-bold text-[14px]` : "text-Blueblack self-center font-bold text-[14px]"}
                            to='/inspections'
                        >
                            Inspections & Certifications
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.active} text-Blueblack self-center font-bold text-[14px]` : "text-Blueblack self-center font-bold text-[14px]"}
                            to='/training'
                        >
                            Training
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.active} text-Blueblack self-center font-bold text-[14px]` : "text-Blueblack self-center font-bold text-[14px]"}
                            to='/approval'
                        >
                            Approval
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.active} text-Blueblack self-center font-bold text-[14px]` : "text-Blueblack self-center font-bold text-[14px]"}
                            to='/gallery'
                        >
                            Gallery
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.active} text-Blueblack self-center font-bold text-[14px]` : "text-Blueblack self-center font-bold text-[14px]"}
                            to='/contact'
                        >
                            Contact us
                        </NavLink>
                       
       
                    </div>
                    <div className='flex items-center lg:hidden xl:hidden 2xl:hidden'>
                        <MenuIcon onClick={() => setOpenSideBar(!openSideBar)} sx={{ width: 40, height: 40, color: '#11B5EA' }} className='lg:hidden xl:hidden 2xl:hidden' />
                    </div>
                </div>
                <div className='absolute left-5 top-24 flex flex-col gap-5 items-center'>
                 <TriStateSwitch label="Language" />
                 <Logout/>
                 {token &&<Link
                            className={({ isActive }) => isActive ? `${style.active}  text-Blueblack self-center font-bold text-[14px]` : "text-Blueblack self-center font-bold text-[14px]"}
                            to='/dashboard'
                        >
                           <SettingsIcon sx={{width:40,height:40,color:"#166b9c"}} className=" hover:rotate-90 transition-all duration-700"/>
                        </Link>}
      </div>
            </div>
            <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        </>
    );
}

export default Header;
