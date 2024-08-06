import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';
import SoildLink from '../../Componant/cunstoms/Links/soildLink';
import SpeedIcon from '@mui/icons-material/Speed';
import "./style.css"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import DrawerList from '../../Componant/cunstoms/cunstomList/drawerList';
import SideList from '../../Componant/cunstoms/cunstomList/drawerList';
export default function SideBarDash() {
  const { sideBar } = useSelector((state) => state.Toggle);
  const dataDrawerTwo=[{
    title:"Profile",
    icon:<KeyboardArrowRightRoundedIcon/>,
    href:"profile"
  },
  {
    title:"About Us",
    icon:<KeyboardArrowRightRoundedIcon/>,
    href:"about"
  },
  {
    title:"Inspecion",
    icon:<KeyboardArrowRightRoundedIcon/>,
    href:"inspecion"
  },
    {
    title:"Contact Us",
    icon:<KeyboardArrowRightRoundedIcon/>,
    href:"contact"
  },
  {
    title:"Training",
    icon:<KeyboardArrowRightRoundedIcon/>,
    href:"training"
  },
  {
    title:"Approvals",
    icon:<KeyboardArrowRightRoundedIcon/>,
    href:"approvals"
  },
  {
    title:"Gallery",
    icon:<KeyboardArrowRightRoundedIcon/>,
    href:"gallery"
  }
]
   const dataDrawerOne =[{
    title:"Dashboard",
    icon:<SpeedIcon/>,
    href:"/dashboard"
   },
   {
    title:"Website",
    icon:<KeyboardArrowRightRoundedIcon/>,
    href:"/"
   },
   {
    title:"User",
    icon:<KeyboardArrowRightRoundedIcon/>,
    href:"/user"
   }
  ]
  const dataDrawerThird =[{
    title:"Settings",
    icon:<SettingsOutlinedIcon/>,
    href:"/settings"
  },
  {
    title:"Logout",
    icon:<PowerSettingsNewOutlinedIcon/>,
    href:"/login"
  }
]

  return (
    <div><Box  sx={{ width: 255,padding:"10px 0px 0px 10px",height:"100vh",position:"fixed",backgroundColor:"white",
     left: sideBar ? 0 :"-300px" ,overflowY:"auto" }} className=' transition-all duration-300' role="presentation">

    <img src={require('../../media/images/logo.png')} className='mb-3' alt="logo" />
    <SideList items={dataDrawerOne}/>
    <div className=' flex justify-center'>
<div className='w-8/12 p-2 font-bold text-gray text-[12px] '>PAGES</div>
</div>

{/* secound list */}
<div className='h-96 overflow-y-auto rounded-lg'>
<SideList items={dataDrawerTwo}/>

{/* third list */}


<Divider />

<SideList items={dataDrawerThird}/>

</div>

  </Box>
  <div className=' relative'>
<div className=' w-[434px] h-[535px] rounded-full bg-opacity-60 bg-secoundColor blur-xl absolute top-14 right-0'></div>
</div>
</div>
  );
}
