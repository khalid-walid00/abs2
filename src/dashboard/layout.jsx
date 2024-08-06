import React from 'react';
import NavBarDash from './navBar';
import SideBarDash from './sideBar';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import "./style.css"
import UpdateModul from './componants/moduls/update';
function LayoutDash(props) {
    const { sideBar } = useSelector((state) => state.Toggle);

    return (
    <div className='flex h-full'>

      <div className={` duration-200 transition-all w-full`}>
        <NavBarDash/>
        <div className='md:px-8  px-2 pb-20 pt-8 '>
          <Outlet/>
          
          {/* <UpdateModul/> */}
        </div>
      </div>
    </div>
  );
}

export default LayoutDash;