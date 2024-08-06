import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SoildLink({ className, text, href, icon }) {
  const location = useLocation();
  const isActive = !location.pathname.startsWith(`/dashboard/${href}`);
  return (
    <NavLink to={href} className={`text-center w-full shadow-sm font-[600] rounded-lg py-2 ${className}`} activeClassName={isActive ? 'active' : ''}>
      <div className='flex items-center justify-between gap-2 w-7/12 flex-row-reverse'>
        <div className='text-start flex-1'>{text}</div>
        {isActive && <div className='text-start'>{icon}</div>}
      </div>
    </NavLink>
  );
}

export default SoildLink;
